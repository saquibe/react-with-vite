import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "painting",
  });

  const displayPerson = () => {
    // setPerson({
    //   name: "john",
    //   age: 27,
    //   hobby: "drawing",
    // });

    // setPerson("Allen");

    // setPerson({ name: "john" });

    setPerson({ ...person, name: "Tom" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Display Person
      </button>
    </div>
  );
}

export default UseStateObject;
