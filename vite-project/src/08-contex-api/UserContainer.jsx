import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  // const value = useContext(NavbarContext);
  // console.log(value);

  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

export default UserContainer;
