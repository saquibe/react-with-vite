import { useState, useEffect } from "react";

function CleanUpFunction() {
  const [toggle, setToggle] = useState(false);
  console.log("component rendered");
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
}

const RandomComponent = () => {
  useEffect(() => {
    // // console.log("hmmm this is interesting");
    // const intId = setInterval(() => {
    //   // console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(intId);
    //   console.log("clean up function");
    // };
    const someFunction = () => {
      console.log("some function");
    };
    window.addEventListener("scroll", someFunction);
    return () => {
      window.removeEventListener("scroll", someFunction);
    };
  }, []);
  return <h2>hello there,</h2>;
};

export default CleanUpFunction;
