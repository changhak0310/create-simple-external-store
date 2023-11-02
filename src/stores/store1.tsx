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

const Counter = () => {
  const count = useStore(
    store,
    useCallback((state) => state.count, [])
  );
  const inc = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const text = useStore(
    store,
    useCallback((state) => state.text, [])
  );
  const setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };
  return (
    <div>
      <input value={text} onChange={setText} className="full-width" />
    </div>
  );
};

export { GetCount, Counter, TextBox };
