import { useState, useEffect } from "react";

function MultipleEffect() {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("useEffect 1");
  }, [value]);

  useEffect(() => {
    console.log("useEffect 2");
  }, [secondValue]);
  return (
    <div>
      <h4>value: {value}</h4>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h4>second value: {secondValue}</h4>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
}

export default MultipleEffect;
