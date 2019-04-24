import React from 'react';
import PhotoItem from "../src/components/Item/PhotoItem"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<PhotoItem src="images/pictures/w01.jpg" caption="TEST" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});