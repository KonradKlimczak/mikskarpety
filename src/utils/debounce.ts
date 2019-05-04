export function debounce(func: Function, waitMilliseconds = 50) {
  let timeoutId: NodeJS.Timeout | null;

  return function(this: any, ...args: any[]) {
    const context = this;

    const doLater = function() {
      timeoutId = null;
      func.apply(context, args);
    };

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);
  };
}
