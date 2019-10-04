import React, { FC } from 'react';
import NotFoundSVG from '../../images/NotFound.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
  <div className='not-found'>
    <img src={NotFoundSVG} alt='Not found' />
    <h1>Upsss...</h1>
    <h2>Nie udało znaleźć się pary do tej skarpety.</h2>
    <p>Przepraszamy. Spróbuj późnniej</p>
    <Link to='/'>
      <Button primary>Wróć</Button>
    </Link>
  </div>
);
