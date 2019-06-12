import {} from 'jest';

import { assertNever } from '../../src/utils/assertNever';

it('assertNever test', () => {
  expect(assertNever).toBeDefined();
  expect(() => assertNever(5 as never)).toThrowError('THIS IS OVER 9000!!!!!s');
});
