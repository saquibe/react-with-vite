import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(0));
  // console.log(useState("Hello World"));
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>{`You clicked ${count} times.`}</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
