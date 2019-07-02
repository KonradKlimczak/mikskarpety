import classnames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';
import m05 from '../../images/pictures/m05.jpg';

import { ISock } from '../../data/Sock';
import { IAppState } from '../../reducers';
import { RemoteData, RemoteDataKind } from '../../utils/RemoteData';
import RemoteLoader from '../../utils/RemoteLoader';
import { useEffect } from 'react';
import { requestSock, receiveSock } from '../../actions/sock';

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
      {props.match.params.slug}

      <RemoteLoader remote={props.socks}>
        {(data) => {
          const sock = data.find((s) => s.id === props.match.params.slug);
          if (!sock) {
            return <div>Upsss... Nie odnaleziono poszukiwanej skarpety... Sorki.</div>;
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
