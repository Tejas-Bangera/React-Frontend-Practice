import { createContext, useContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import { data } from "./data";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function App() {
  const [users, setUsers] = useState(data);
  return (
    <>
      <GlobalContext.Provider value={{ users, setUsers }}>
        {/* <Form commonUsers={users} setCommonUsers={setUsers} /> */}
        {/* <Users commonUsers={users} setCommonUsers={setUsers} /> */}
        <Form />
        <Users />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
