export function debounce(func: any, waitMilliseconds = 50) {
  let timeoutId: NodeJS.Timeout | null;

  return function(this: any, ...args: any[]) {
    const doLater = () => {
      timeoutId = null;
      func.apply(this, args);
    };

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);
  };
}
