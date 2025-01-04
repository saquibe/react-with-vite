import { data } from "../../data.js";
import { useState } from "react";
import List from "./List.jsx";
import Counter from "./Counter.jsx";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};

export default LowerState;
