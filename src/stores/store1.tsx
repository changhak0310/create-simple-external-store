import { useCallback } from "react";
import { createStore, useStore } from "./store";

const store = createStore<{ count: number; text: string }>({
  count: 0,
  text: "hello",
});

store.subscribe(() => {
  const currentCount = store.getState().count;
  console.log(currentCount);
});
export default class Store {
  getCount: () => number = () => {
    return useStore(
      store,
      useCallback((state) => state.count, [])
    );
  };
  getText: () => string = () => {
    return useStore(
      store,
      useCallback((state) => state.text, [])
    );
  };
  countPlus = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };
}
