import { createStore, useStore } from "./stores/store";
import { useCallback } from "react";

const store = createStore<{ count: number, text: string }>({ count: 0, text: 'hello' });

const Counter = () => {
  const count = useStore(store, useCallback((state) => state.count, []));
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
  const text = useStore(store, useCallback((state) => state.text, []));
  const setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }));
  };
  return (
    <div>
      <input value={text} onChange={setText} className="full-width" />
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  );
};

export default App
