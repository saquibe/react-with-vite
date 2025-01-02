import React, { useState } from "react";

function MultipleInputs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>multiple inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={user.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default MultipleInputs;
