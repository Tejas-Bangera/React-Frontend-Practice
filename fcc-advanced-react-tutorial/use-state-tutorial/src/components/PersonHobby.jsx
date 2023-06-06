import { useState } from "react";
import "./person-hobby.css";

const PersonHobby = () => {
  const showJohn = () => {
    setPerson({ name: "John", age: 26, hobby: "Badminton" });
  };
  const [{ name, age, hobby }, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "reading books",
  });
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("reading books");
  return (
    <div className="person-hobby-container">
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>Enjoys: {hobby}</h4>
      <button onClick={showJohn}>Show John</button>
    </div>
  );
};
export default PersonHobby;
