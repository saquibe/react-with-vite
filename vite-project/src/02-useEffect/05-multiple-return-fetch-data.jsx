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
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          throw new Error("Failed to fetch data");
        }
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

  const { name, login, avatar_url, bio } = user;
  return (
    <div>
      <h2>fetch data</h2>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{name}</h2>
      <h4>{login}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default MultipleReturnFetchData;
