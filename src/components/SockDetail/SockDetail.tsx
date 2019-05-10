import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { Sock } from '../../data/Sock';
import { AppState } from '../../reducers';
import { RemoteData } from '../../utils/RemoteData';

interface SockDetailProps {
  sock: RemoteData<Sock>;
  match: match<{
    slug: string;
  }>;
}

const SockDetail: React.FunctionComponent<SockDetailProps> = props => {
  let content = null;

  return (
    <div className={classnames('sock-offer')}>
      {props.match.params.slug}
      {content}
    </div>
  );
};

export default connect(
  (state: AppState) => {
    return {
      sock: state.sock.list as any
    };
  },
  () => ({})
)(SockDetail);
