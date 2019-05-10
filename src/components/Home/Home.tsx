import React, { Fragment, FunctionComponent } from 'react';

import a03 from '../../images/pictures/a03.jpg';
import bs01 from '../../images/pictures/bs01.jpg';
import m05 from '../../images/pictures/m05.jpg';
import m06 from '../../images/pictures/m06.jpg';
import m08 from '../../images/pictures/m08.jpg';
import w01 from '../../images/pictures/w01.jpg';
import { Size } from '../../utils/Size';
import PhotoItem from '../Item/PhotoItem';
import Spinner from '../Spinner/Spinner';

const Home: FunctionComponent = () => {
  return (
    <Fragment>
      <div className='photo-grid'>
        <PhotoItem src={m08} size={Size.Big} caption='Swieta swieta' />
        <PhotoItem src={w01} />
        <PhotoItem src={bs01} />
        <PhotoItem src={a03} />
        <PhotoItem src={m06} />
        <PhotoItem src={m05} />
      </div>
      <Spinner />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum tenetur voluptatum quaerat perspiciatis
        excepturi, deserunt tempora similique. Omnis iure suscipit expedita obcaecati rerum numquam cum eius ab placeat
        eum maiores, deleniti accusamus quidem ad. Autem fugiat quod saepe molestiae ullam.
      </div>
    </Fragment>
  );
};

export default Home;
