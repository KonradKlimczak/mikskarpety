import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { ISock } from '../../data/Sock';
import { IAppState } from '../../reducers';
import { RemoteData } from '../../utils/RemoteData';

interface ISockOfferProps {
  socks: RemoteData<ISock[]>;
  match: match<{
    category: string;
  }>;
}

const SockOffer: React.SFC<ISockOfferProps> = (props) => {
  return <div className={classnames('sock-offer')}>{props.match.params.category}</div>;
};

export default connect(
  (state: IAppState) => {
    return {
      sock: state.sock.list,
    };
  },
  () => ({}),
)(SockOffer);
