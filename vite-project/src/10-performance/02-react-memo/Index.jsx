import { data } from "../../data.js";
import { useCallback, useMemo, useState } from "react";
import List from "./List.jsx";
import { slowFunction } from "./slowFunction.js";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const value = useMemo(() => slowFunction(), []);
  console.log(value);

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
