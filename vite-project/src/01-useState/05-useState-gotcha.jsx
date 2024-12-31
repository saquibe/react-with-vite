import { useState } from "react";

function UseStateGotcha() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // console.log(value);
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };
  return (
    <div>
      <h2>{value}</h2>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default UseStateGotcha;
