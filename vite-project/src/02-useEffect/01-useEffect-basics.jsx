import { useState, useEffect } from "react";

function UseEffectBasics() {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello from sayHello");
  };
  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h4>value: {value}</h4>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
}

export default UseEffectBasics;
