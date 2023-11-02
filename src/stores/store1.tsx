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

const GetCount: () => number = () => {
    return useStore(
      store,
      useCallback((state) => state.count, [])
    );
  };
const GetText: () => string = () => {
    return useStore(
      store,
      useCallback((state) => state.text, [])
    );
  };

const CountPlus = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
}

const ChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
  store.setState((prev) => ({ ...prev, text: event.target.value }));
};
  
export { GetCount, GetText, CountPlus, ChangeText };
