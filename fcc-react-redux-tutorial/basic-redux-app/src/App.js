import "./App.css";
import HelloWorld from "./components/HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers";

function App() {
  const initialState = {
    tech: "React",
  };
  const store = createStore(reducer, initialState);
  return (
    <>
      <HelloWorld tech={store.getState().tech} />
    </>
  );
}

export default App;
