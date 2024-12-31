import { useState } from "react";

function UseStateGotcha() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      // console.log("i clicked on the button");
      // setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default UseStateGotcha;
