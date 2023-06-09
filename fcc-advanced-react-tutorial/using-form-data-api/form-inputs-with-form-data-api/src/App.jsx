import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import { data } from "./data";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <>
      <Form commonUsers={users} setCommonUsers={setUsers} />
      <Users commonUsers={users} setCommonUsers={setUsers} />
    </>
  );
}

export default App;
