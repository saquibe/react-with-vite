import "./App.css";
import ErrorExample from "./01-useState/01-error-example";
import UseStateBasics from "./01-useState/02-useState-basics";
import UseStateArray from "./01-useState/03-useState-array";

function App() {
  return (
    <div className="container">
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray />
    </div>
  );
}

export default App;
