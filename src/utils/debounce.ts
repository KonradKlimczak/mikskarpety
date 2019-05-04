function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null;
  return function(...args: any) {
    var later = () => {
      timeout = null;
      func.apply(null, args);
    };
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
