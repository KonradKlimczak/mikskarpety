import * as React from 'react';

import { Size } from '../../utils/Size';
import PhotoItem from '../Item/PhotoItem';

const m08 = require('../../images/pictures/m08.jpg');

interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <React.Fragment>
      <div className='photo-grid'>
        <PhotoItem src={m08} size={Size.Big} caption='Swieta swieta' />
        <img src='images/pictures/w01.jpg' />
        <img src='images/pictures/bs01.jpg' />
        <img src='images/pictures/a03.jpg' />
        <img src='images/pictures/m06.jpg' />
        <img src='images/pictures/m05.jpg' />
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum tenetur voluptatum quaerat perspiciatis excepturi,
      deserunt tempora similique. Omnis iure suscipit expedita obcaecati rerum numquam cum eius ab placeat eum maiores,
      deleniti accusamus quidem ad. Autem fugiat quod saepe molestiae ullam.
    </React.Fragment>
  );
};

export default Home;
