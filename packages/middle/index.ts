import { Class } from "types";

export interface Counter {
  count: () => number;
}

export const createBaseClass = (): Class<Counter> => {
  return class implements Counter {
    private counter = 0;
    public count() {
      return ++this.counter;
    }
  };
};
