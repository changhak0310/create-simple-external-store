import { Counter, TextBox } from "./stores/store1";
import { Counter2 } from "./stores/store2";
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
