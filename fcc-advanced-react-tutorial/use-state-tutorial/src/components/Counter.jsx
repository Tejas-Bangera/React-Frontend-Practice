import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentValue) => currentValue + 1);
  };

  return (
    <div className="counter-container">
      <h2>You clicked {count} times</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
export default Counter;
