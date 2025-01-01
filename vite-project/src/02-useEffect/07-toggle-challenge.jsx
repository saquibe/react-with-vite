import { useState } from "react";

function ToggleChallenge() {
  const [showAlert, setShowAlert] = useState(false);
  // const handleClick = () => {
  //   if (showAlert) {
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
}

const Alert = () => {
  return <h4 className="alert alert-danger">hello world</h4>;
};

export default ToggleChallenge;
