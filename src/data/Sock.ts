export interface ISockSize {
  from: number;
  to: number;
}

export interface IColor {
  id: string;
  hex: string;
  name: string;
}

export interface ISock {
  id: string;
  name: string;
  src: string;
  tags: string[];
  sizes: ISockSize[];
  description: string;
  packing: number;
  colors: IColor[];
}
