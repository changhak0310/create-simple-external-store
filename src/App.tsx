import Store from "./stores/store1";
import { Counter2 } from "./stores/store2";

const store = new Store();

const Counter = () => {
  const count = store.getCount();
  return(
    <div>
       {count} <button onClick={store.countPlus}>+1</button>
    </div>
  )
}

const TextBox = () => {
  const text = store.getText();
  return(
    <div>
      <input value={text} onChange={store.changeText} className="full-width" />
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Counter />
      <Counter />
      <Counter2/>
      <TextBox />
      <TextBox />
    </div>
  );
};

export default App
