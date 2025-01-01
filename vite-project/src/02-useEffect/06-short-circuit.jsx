import { useState } from "react";

function ShortCircuitOverview() {
  const [text, setText] = useState("");
  const [name, setName] = useState("saquib");

  const codeExample = text || "hello world";

  return (
    <div>
      {/* {if(someCondition) {"won't work"}} */}
      <h4>falsy OR: {text || "hello world"}</h4>
      <h4>falsy AND: {text && "hello world"}</h4>
      <h4>Truthy OR: {name || "hello world"}</h4>
      <h4>Truthy AND: {name && "hello world"}</h4>
      <h4>{codeExample}</h4>
    </div>
  );
}

export default ShortCircuitOverview;
