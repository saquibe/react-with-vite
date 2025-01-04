import { useAppContext } from "./Navbar";

const UserContainer = () => {
  // const value = useContext(NavbarContext);
  // console.log(value);

  const { user, logout } = useAppContext();

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
