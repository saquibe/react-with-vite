import { data } from "../../data.js";
import { useCallback, useState } from "react";
import List from "./List.jsx";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id != id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ margin: "1rem" }}
      >
        count: {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

export default LowerState;
