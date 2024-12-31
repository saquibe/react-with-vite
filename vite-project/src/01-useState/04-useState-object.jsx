import { useState } from "react";

function UseStateObject() {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("sports");

  const displayPerson = () => {
    setName("john");
    setAge(30);
    setHobby("reading");
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys: {hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Display Person
      </button>
    </div>
  );
}

export default UseStateObject;
