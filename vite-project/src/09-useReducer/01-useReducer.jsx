// import { useState } from "react";
import { data } from "../data";
import { useReducer } from "react";

const defaultState = {
  people: data,
  isLoading: false,
};

const CLEAR_LIST = "CLEAR_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const RESET_LIST = "RESET_LIST";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`no matching ${action.type} action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });

    // dispatch({ type: "do something" });

    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button className="btn" onClick={resetList}>
          Reset
        </button>
      ) : (
        <button className="btn" onClick={clearList}>
          Clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
