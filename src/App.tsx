import { GetCount, GetText, CountPlus, ChangeText } from "./stores/store1";
import { Counter2 } from "./stores/store2";

const Counter = () => {
  const count = GetCount();
  return(
    <div>
       {count} <button onClick={CountPlus}>+1</button>
    </div>
  )
}

const TextBox = () => {
  const text = GetText();
  return(
    <div>
      <input value={text} onChange={ChangeText} className="full-width" />
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
