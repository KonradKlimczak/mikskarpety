import classnames from 'classnames';
import React, { Fragment, SFC, useEffect } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { receiveSock, requestSock } from '../../actions/sock';
import { ISock } from '../../data/Sock';
import m05 from '../../images/pictures/m05.jpg';
import { IAppState } from '../../reducers';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import RemoteLoader from '../../utils/RemoteLoader';
import { Size } from '../../utils/Size';
import PhotoItem from '../Item/PhotoItem';
import { Link } from 'react-router-dom';

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
              <Link key={sock.id} to={`/sock/${sock.id}`}>
                <PhotoItem size={Size.Big} src={sock.src} caption={sock.name} />
              </Link>
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
        setTimeout(() => resolve(), 1000);
      }).then(() => {
        dispatch(
          receiveSock([
            {
              id: 'test',
              colors: [],
              description: 'Bardzo fajne skarpety',
              name: 'Skarpety garniturowe',
              sizes: [{ from: 38, to: 40 }],
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
