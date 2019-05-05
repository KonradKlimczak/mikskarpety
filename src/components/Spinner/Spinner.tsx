import * as React from 'react';

const SockIcon = require('../../images/icons/Sock.svg');

interface SpinnerProps {}

const Spinner: React.SFC<SpinnerProps> = () => {
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
