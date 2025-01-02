import avatar from "../assets/avatar.svg";

function Person({ name, nickName = "bittu", images }) {
  // const img = images[0].small.url;
  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ height: "50px" }} />
      <h4>Name: {name}</h4>
      <p>NickName: {nickName}</p>
    </div>
  );
}

export default Person;
