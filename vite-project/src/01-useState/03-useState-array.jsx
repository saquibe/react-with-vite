import { useState } from "react";
import { data } from "../data";

function UseStateArray() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  // const clearAllItems = () => {
  //   setPeople([]);
  // };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        Clear All Items
      </button>
    </div>
  );
}

export default UseStateArray;
