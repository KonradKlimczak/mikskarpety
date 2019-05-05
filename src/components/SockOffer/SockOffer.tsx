import classnames from 'classnames';
import * as React from 'react';

import { debounce } from '../../utils/debounce';
import { connect } from 'react-redux';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import { Sock } from '../../actions/sock';
import { AppState } from '../../reducers';

interface SockOfferProps {
  socks: RemoteData<Sock[]>;
}

const SockOffer: React.SFC<SockOfferProps> = props => {
  React.useEffect(() => {
    console.log('Test');
  });

  let content = null;

  switch (props.socks.kind) {
    case RemoteDataKind.NotAsked:
    case RemoteDataKind.Loading:
      content = <div>Loading</div>;

    default:
      break;
  }

  return <div className={classnames('sock-offer')} />;
};

export default connect(
  (state: AppState) => {
    return {
      sock: state.sock.list
    };
  },
  () => ({})
)(SockOffer);
