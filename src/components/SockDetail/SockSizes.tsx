import classnames from 'classnames';
import * as React from 'react';
import { ISockSize } from '../../data/Sock';

interface ISockSizesProps {
  sizes: ISockSize[];
}

export const SockSizes: React.FunctionComponent<ISockSizesProps> = (props) => {
  return (
    <div className={classnames('mik-sock-sizes')}>
      {props.sizes.map((size) => (
        <div className='mik-sock-size'>
          {size.from} {size.to}
        </div>
      ))}
    </div>
  );
};
