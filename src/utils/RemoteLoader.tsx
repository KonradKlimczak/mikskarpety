import React, { PureComponent, ReactNode } from 'react';

import Spinner from '../components/Spinner/Spinner';
import { assertNever } from './assertNever';
import { RemoteData, RemoteDataKind } from './RemoteData';

interface IRemoteLoaderProps<T> {
  data: RemoteData<T>;
  children: (data: T) => ReactNode;
  tryAgain?: () => void;
}

class RemoteLoader<T> extends PureComponent<IRemoteLoaderProps<T>> {
  public render() {
    const { data, children } = this.props;
    switch (data.kind) {
      case RemoteDataKind.NotAsked:
        return <div> nice not asked yet </div>;
      case RemoteDataKind.Loading:
        return <Spinner />;
      case RemoteDataKind.Success:
        return children(data.data);
      case RemoteDataKind.Failure:
        return <div>daaaamn</div>;

      default:
        return assertNever(data);
    }
  }
}
export default RemoteLoader;
