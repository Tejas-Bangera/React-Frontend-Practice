import { useState } from "react";
import "./App.css";
import DataList from "./assets/components/DataList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textTransform: "capitalize" }}>
      <h2>Optional Chaining practice</h2>
      <DataList />
    </div>
  );
}

export default App;
