import { useCallback } from "react";
import { createStore, useStore } from "./store";

const storeNumber = createStore<number>(0);

storeNumber.subscribe(() => {
  const currentCount = storeNumber.getState();
  console.log(currentCount);
});

const Counter2 = () => {
  const count = useStore(
    storeNumber,
    useCallback((state) => state, [])
  );
  const inc = () => {
    storeNumber.setState((prev) => prev + 1);
  };
  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};

export { Counter2 };