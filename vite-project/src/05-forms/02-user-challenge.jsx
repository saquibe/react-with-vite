import { useState } from "react";
import { data } from "../data";

function UserChallenge() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // console.log("form submitted");
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <h2>Users</h2>;
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeUser(id)}>
                remove
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default UserChallenge;
