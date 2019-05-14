import {} from 'jest';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../src/components/Button/Button';

it('Button renders correctly', () => {
  const tree = renderer.create(<Button>Test</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Button add classes', () => {
  const primary = renderer.create(<Button primary>Test</Button>).toJSON();
  expect(primary).toMatchSnapshot();
  const round = renderer.create(<Button round>Test</Button>).toJSON();
  expect(round).toMatchSnapshot();
});
