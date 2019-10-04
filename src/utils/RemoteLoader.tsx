import React, { PureComponent, ReactNode } from 'react';

import { Spinner } from '../components/Spinner';
import { assertNever } from './assertNever';
import { RemoteData, RemoteDataKind } from './RemoteData';

interface IRemoteLoaderProps<T> {
  remote: RemoteData<T>;
  children: (data: T) => ReactNode;
  tryAgain?: () => void;
  onFailure?: (error: Error) => ReactNode;
}

export class RemoteLoader<T> extends PureComponent<IRemoteLoaderProps<T>> {
  public render() {
    const { remote, children, onFailure } = this.props;
    switch (remote.kind) {
      case RemoteDataKind.NotAsked:
        return <div> nice not asked yet </div>;
      case RemoteDataKind.Loading:
        return <Spinner />;
      case RemoteDataKind.Success:
        return children(remote.data);
      case RemoteDataKind.Failure:
        return onFailure ? onFailure(remote.error) : <div>daaaamn</div>;

      default:
        return assertNever(remote);
    }
  }
}
