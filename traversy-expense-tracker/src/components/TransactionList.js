import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div id="history-container">
      <h3 id="history-header" className="component-title">
        History
      </h3>
      <ul id="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </div>
  );
};
export default TransactionList;
