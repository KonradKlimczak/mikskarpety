import classnames from 'classnames';
import React, { SFC, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import m05 from '../../images/pictures/m05.jpg';
import { ISock } from '../../data/Sock';
import { IAppState } from '../../reducers';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import RemoteLoader from '../../utils/RemoteLoader';
import PhotoItem from '../Item/PhotoItem';
import { requestSock, receiveSock } from '../../actions/sock';
import { Size } from '../../utils/Size';

interface ISockOfferProps {
  socks: RemoteData<ISock[]>;
  match: match<{
    category: string;
  }>;
  onFetchSocks: () => void;
}

const SockOffer: SFC<ISockOfferProps> = (props) => {
  useEffect(() => {
    if (props.socks.kind === RemoteDataKind.NotAsked) {
      props.onFetchSocks();
    }
  });
  return (
    <Fragment>
      {props.match.params.category}
      <RemoteLoader remote={props.socks}>
        {(data) => (
          <div className={classnames('sock-offer')}>
            {data.map((sock) => (
              <PhotoItem size={Size.Big} src={sock.src} caption={sock.name} />
            ))}
          </div>
        )}
      </RemoteLoader>
    </Fragment>
  );
};

export default connect(
  (state: IAppState) => {
    return {
      socks: state.sock.list,
    };
  },
  (dispatch) => ({
    onFetchSocks: () => {
      dispatch(requestSock());
      new Promise((resolve) => {
        resolve();
      }).then(() => {
        dispatch(
          receiveSock([
            {
              id: '',
              colors: [],
              description: '',
              name: 'Skarpety garniturowe',
              sizes: [],
              tags: [],
              packing: 10,
              src: m05,
            },
          ]),
        );
      });
    },
  }),
)(SockOffer);
