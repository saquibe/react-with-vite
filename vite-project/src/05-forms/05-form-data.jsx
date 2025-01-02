import React, { useState } from "react";

function UncontrolledInputs() {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // console.log(formData);
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log(name, email, password);

    // console.log([...formData.entries()]);

    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>form data API</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledInputs;
