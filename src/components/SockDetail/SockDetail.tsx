import classnames from 'classnames';
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import { receiveSock, requestSock } from '../../actions/sock';
import { ISock } from '../../data/Sock';
import NotFound from '../../images/NotFound.svg';
import m05 from '../../images/pictures/m05.jpg';
import { IAppState } from '../../reducers';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import RemoteLoader from '../../utils/RemoteLoader';

interface ISockDetailProps {
  socks: RemoteData<ISock[]>;
  match: match<{
    slug: string;
  }>;
}

const SockDetail: React.FunctionComponent<ISockDetailProps> = (props) => {
  useEffect(() => {
    if (props.socks.kind === RemoteDataKind.NotAsked) {
      props.onFetchSocks();
    }
  });

  return (
    <div className={classnames('sock-offer')}>
      <RemoteLoader remote={props.socks}>
        {(data) => {
          const sock = data.find((s) => s.id === props.match.params.slug);
          if (!sock) {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={NotFound} alt='Not found' />
                <h1>Upsss...</h1>
                <h2>Nie odnaleziono drugiej skarpety od tej pary... Sorki.</h2>
              </div>
            );
          }
          return <div>Szczegóły skarpety</div>;
        }}
      </RemoteLoader>
    </div>
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
)(SockDetail);
