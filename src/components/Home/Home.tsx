import * as React from 'react';

import { Size } from '../../utils/Size';
import PhotoItem from '../Item/PhotoItem';
import Spinner from '../Spinner/Spinner';

const m08 = require('../../images/pictures/m08.jpg');
const w01 = require('../../images/pictures/w01.jpg');
const bs01 = require('../../images/pictures/bs01.jpg');
const a03 = require('../../images/pictures/a03.jpg');
const m06 = require('../../images/pictures/m06.jpg');
const m05 = require('../../images/pictures/m05.jpg');

interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <React.Fragment>
      <div className="photo-grid">
        <PhotoItem src={m08} size={Size.Big} caption="Swieta swieta" />
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
    </React.Fragment>
  );
};

export default Home;
