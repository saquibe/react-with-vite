import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  const { name } = useGlobalContext();
  console.log(name);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
