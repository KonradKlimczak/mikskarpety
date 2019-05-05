import classnames from 'classnames';
import * as React from 'react';

import { getSizeClassName, Size } from '../../utils/Size';


interface PhotoItemProps {
  src: string;
  caption?: string;
  size?: Size;
}

const PhotoItem: React.SFC<PhotoItemProps> = props => {
  return (
    <figure className={classnames('photo-item', getSizeClassName(props.size))}>
      <img src={props.src} />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};

export default PhotoItem;