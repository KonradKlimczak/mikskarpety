import classnames from 'classnames';
import * as React from 'react';

import { getSizeClassName, Size } from '../../utils/Size';

interface IPhotoItemProps {
  src: string;
  caption?: string;
  size?: Size;
}

const PhotoItem: React.SFC<IPhotoItemProps> = (props) => {
  return (
    <figure className={classnames('photo-item', getSizeClassName(props.size))} tabIndex={0}>
      <img src={props.src} />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};

export default PhotoItem;
