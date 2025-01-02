import React from "react";

function ControlledInputs() {
  return (
    <form className="form">
      <h4>Controlled Input</h4>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="form-input" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
}

export default ControlledInputs;
