import {} from 'jest';

import { debounce } from '../../src/utils';

it('test testFunc is debounced to one call', () => {
  jest.useFakeTimers();

  const testFunc = jest.fn();
  const debouncedFunc = debounce(testFunc, 100);

  debouncedFunc();
  debouncedFunc();

  jest.runTimersToTime(100);

  expect(testFunc).toBeCalledTimes(1);
});
