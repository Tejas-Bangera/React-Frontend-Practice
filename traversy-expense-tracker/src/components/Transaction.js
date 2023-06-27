import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ id, title, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={"transaction " + (amount < 0 ? "minus" : "plus")}>
      <span>{title}</span>
      <div>
        <span>{sign + "$" + Math.abs(amount)}</span>{" "}
        <button id="delete-button" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </div>
    </li>
  );
};
export default Transaction;
