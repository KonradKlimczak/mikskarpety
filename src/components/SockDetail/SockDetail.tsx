import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { ISock } from '../../data/Sock';
import { IAppState } from '../../reducers';
import { RemoteData } from '../../utils/RemoteData';

interface ISockDetailProps {
  sock: RemoteData<ISock>;
  match: match<{
    slug: string;
  }>;
}

const SockDetail: React.FunctionComponent<ISockDetailProps> = (props) => {
  const content = null;

  return (
    <div className={classnames('sock-offer')}>
      {props.match.params.slug}
      {content}
    </div>
  );
};

export default connect(
  (state: IAppState) => {
    return {
      sock: state.sock.list as any,
    };
  },
  () => ({}),
)(SockDetail);
