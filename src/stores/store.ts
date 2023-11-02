import { useSyncExternalStore, useCallback } from "react";

const createStore = <T>(initialState: T) => {
  let state = initialState;
  const getState = () => state;
  const listeners = new Set<() => void>();
  const setState = (fn: (prevState: T) => T) => {
    state = fn(state);
    listeners.forEach((l) => l());
  };
  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return { getState, setState, subscribe };
};

//
//  tearing 현상 발생
//
// const useStore = <T, R>(store: { getState: () => T, subscribe: (listener: () => void) => () => void }, selector: (state: T) => R) => {
//   const [state, setState] = useState(() => selector(store.getState()));
//   useEffect(() => {
//     const callback = () => setState(selector(store.getState()));
//     const unsubscribe = store.subscribe(callback);
//     callback();
//     return unsubscribe;
//   }, [store, selector]);
//   return state;
// };

//
//  tearing 예방
//  https://velog.io/@jay/useSyncExternalStore
//  
const useStore = <T, R>(
    store: { getState: () => T; subscribe: (listener: () => void) => () => void },
    selector: (state: T) => R
  ) => {
    return useSyncExternalStore(
      store.subscribe,
      useCallback(() => selector(store.getState()), [store, selector])
    );
  };

export { createStore, useStore }