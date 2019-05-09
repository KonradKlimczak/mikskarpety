import classnames from 'classnames';
import * as React from 'react';

import { debounce } from '../../utils/debounce';
import { connect } from 'react-redux';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import { AppState } from '../../reducers';
import { match } from 'react-router';
import { Sock } from '../../data/Sock';

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
