import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { Sock } from '../../data/Sock';
import { AppState } from '../../reducers';
import { RemoteData } from '../../utils/RemoteData';

interface SockOfferProps {
  socks: RemoteData<Sock[]>;
  match: match<{
    category: string;
  }>;
}

const SockOffer: React.SFC<SockOfferProps> = props => {
  let content = null;

  return (
    <div className={classnames('sock-offer')}>
      {props.match.params.category}
      {content}
    </div>
  );
};

export default connect(
  (state: AppState) => {
    return {
      sock: state.sock.list
    };
  },
  () => ({})
)(SockOffer);
