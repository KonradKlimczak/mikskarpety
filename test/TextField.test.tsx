import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import TextField from '../src/components/TextField/TextField';

afterEach(cleanup);

it('TextField renders correctly', () => {
  const tree = renderer.create(<TextField icon='TestIcon' placeholder='Find love' onChange={console.log} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('TextField onChange handler', () => {
  const changeCallback = jest.fn();
  const textFieldRenderer = render(<TextField icon='TestIcon' placeholder='Find love' onChange={changeCallback} />);
  const testInput = textFieldRenderer.getByTestId('input');
  expect(testInput).toBeTruthy();
  const value = 'TEST';
  fireEvent.change(testInput, { target: { value } });
  expect(changeCallback).toBeCalledTimes(1);
  expect(changeCallback).toBeCalledWith(value);
});
