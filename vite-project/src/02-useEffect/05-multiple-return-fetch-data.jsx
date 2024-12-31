import { useEffect, useState } from "react";

const url = "https://api.github.com/users/saquibe";

function MultipleReturnFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const getUser = async () => {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
      };
      getUser();
    } catch (error) {
      setIsError(true);
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }
  return (
    <div>
      <h2>fetch data</h2>
      <img
        src={user.avatar_url}
        alt={user.name}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{user.name}</h2>
      <h4>{user.login}</h4>
      <p>{user.bio}</p>
    </div>
  );
}

export default MultipleReturnFetchData;
