import useFetchPerson from "./useFetchPerson";

const url = "https://api.github.com/users/saquibe";

function FetchData() {
  const { user, isLoading, isError } = useFetchPerson(url);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error...</h2>;
  }

  const { name, avatar_url, bio } = user;
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default FetchData;
