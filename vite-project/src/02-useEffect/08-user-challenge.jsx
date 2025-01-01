import { useState } from "react";

function UserChllenge() {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "Mohammad saquib", age: 24 });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h3>hello there, {user.name}</h3>
          <h3>{user.age}</h3>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h3>please login</h3>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
}

export default UserChllenge;
