import avatar from "../../assets/default-avatar.svg";

const Person = ({ name, nickName, images }) => {
  const imgUrl = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img
        src={imgUrl}
        alt={name}
        style={{ width: "50px", borderRadius: "25px" }}
      />
      <h4>{name}</h4>
      <p>Nickname: {nickName || "none"}</p>
    </div>
  );
};
export default Person;
