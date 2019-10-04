import classnames from 'classnames';
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { receiveSock, requestSock } from '../../actions/sock';
import { ISock } from '../../data/Sock';
import NotFound from '../../images/NotFound.svg';
import m05 from '../../images/pictures/m05.jpg';
import { IAppState } from '../../reducers';
import { getSock } from '../../selectors';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import { RemoteLoader } from '../../utils/RemoteLoader';
import { SockSizes } from './SockSizes';

interface ISockDetailProps {
  sock: RemoteData<ISock>;
  onFetchSocks: () => void;
}

const SockDetail: React.FunctionComponent<ISockDetailProps> = (props) => {
  useEffect(() => {
    if (props.sock.kind === RemoteDataKind.NotAsked) {
      props.onFetchSocks();
    }
  });

  return (
    <div className={classnames('sock-offer')}>
      {props.sock.kind}
      <RemoteLoader
        remote={props.sock}
        onFailure={() => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={NotFound} alt='Not found' />
              <h1>Upsss...</h1>
              <h2>Nie odnaleziono drugiej skarpety od tej pary... Sorki.</h2>
            </div>
          );
        }}
      >
        {(sock) => {
          return (
            <div className='mik-sock-details'>
              <div className='mik-sock-details-images'>
                <img src={sock.src} />
              </div>
              <div className='mik-sock-details-info'>
                <div>{sock.description}</div>
                <SockSizes sizes={sock.sizes} />
                <div>Skarpety kolory</div>
              </div>
            </div>
          );
        }}
      </RemoteLoader>
    </div>
  );
};

export default connect(
  (state: IAppState, props: RouteComponentProps<{ slug: string }>) => {
    return {
      sock: getSock(state.sock.list, props.match.params.slug),
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
)(SockDetail);
