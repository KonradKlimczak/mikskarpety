import React, { FC } from 'react';

import SockIcon from '../../images/icons/Sock.svg';

export const Spinner: FC = () => {
  return (
    <div className='spinner'>
      <div className='spinning-socks'>
        <img className='spin' src={SockIcon} />
        <img className='spin' src={SockIcon} />
        <img className='spin' src={SockIcon} />
      </div>
      <p>Loading...</p>
    </div>
  );
};
