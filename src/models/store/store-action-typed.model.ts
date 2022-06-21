export interface ActionTypedInterface<T = any> {
  type: string;
  payload?: T;
  [x: string]: any;
}
