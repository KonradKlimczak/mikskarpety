import React, { FunctionComponent } from 'react';

import SockIcon from '../../images/icons/Sock.svg';

const Spinner: FunctionComponent = () => {
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

export default Spinner;
