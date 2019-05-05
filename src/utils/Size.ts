import { assertNever } from './assertNever';

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Big = 'Big'
}

export function getSizeClassName(size: Size) {
  switch (size) {
    case Size.Small:
      return 'size--small';
    case Size.Medium:
      return 'size--medium';
    case Size.Big:
      return 'size--big';

    default:
      return assertNever(size);
  }
}
