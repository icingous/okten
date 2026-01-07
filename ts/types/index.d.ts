export {};

declare global {
  interface Array<T> {
    myForEach(cb: (item: T, index?: number, array?: T[]) => void): void;
    myFilter(cb: (item: T, index?: number, array?: T[]) => boolean): T[];
  }
}
