import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ISock } from '../../data/Sock';
import { IAppState } from '../../reducers';
import { getSock } from '../../selectors';
import { RemoteData } from '../../utils';

interface ISockDetailProps {
  sock: RemoteData<ISock>;
}

const SockDetail: React.FunctionComponent<ISockDetailProps> = (props) => {
  const content = null;

  return (
    <div className={classnames('sock-offer')}>
      {props.sock.kind}
      {content}
    </div>
  );
};

export default connect((state: IAppState, props: RouteComponentProps<{ slug: string }>) => {
  return {
    sock: getSock(state.sock.list, props.match.params.slug),
  };
})(SockDetail);
