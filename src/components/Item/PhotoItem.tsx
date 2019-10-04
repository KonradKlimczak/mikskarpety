import classnames from 'classnames';
import React from 'react';

import { getSizeClassName, Size } from '../../utils';

interface IPhotoItemProps {
  src: string;
  caption?: string;
  size?: Size;
}

export const PhotoItem: React.SFC<IPhotoItemProps> = (props) => {
  return (
    <figure className={classnames('photo-item', getSizeClassName(props.size))} tabIndex={0}>
      <img src={props.src} />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};
