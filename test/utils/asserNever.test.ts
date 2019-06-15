import {} from 'jest';

import { assertNever } from '../../src/utils/assertNever';

it('test if assertNever throws an error on execution', () => {
  expect(assertNever).toBeDefined();
  expect(() => assertNever(5 as never)).toThrowError('THIS IS OVER 9000!!!!!s');
});
