export interface SockSize {
  from: number;
  to: number;
}

export interface Color {
  id: string;
  hex: string;
  name: string;
}

export interface Sock {
  id: string;
  name: string;
  src: string;
  tags: string[];
  sizes: SockSize[];
  description: string;
  packing: number;
  colors: Color[];
}
