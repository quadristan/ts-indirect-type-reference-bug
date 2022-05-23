export interface Class<TInterface, TArgs extends Array<unknown> = never> {
  new (...args: TArgs): TInterface;
}
