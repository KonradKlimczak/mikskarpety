import {} from 'jest';

import { debounce } from '../../src/utils/debounce';

it('getSizeClassName test', () => {
  jest.useFakeTimers();

  const testFunc = jest.fn();
  const debouncedFunc = debounce(testFunc, 100);

  debouncedFunc();
  debouncedFunc();

  jest.runTimersToTime(100);

  expect(testFunc).toBeCalledTimes(1);
});
