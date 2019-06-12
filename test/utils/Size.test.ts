import {} from 'jest';

import { Size, getSizeClassName } from '../../src/utils/Size';

it('getSizeClassName test', () => {
  expect(getSizeClassName).toBeDefined();
  expect(getSizeClassName(Size.Small)).toEqual('size--small');
  expect(getSizeClassName(Size.Medium)).toEqual('size--medium');
  expect(getSizeClassName(Size.Big)).toEqual('size--big');
});
