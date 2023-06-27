import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((acc, cash) => (acc += cash), 0).toFixed(2);

  return (
    <div id="balance-container">
      <p className="component-title">Your Balance</p>
      <h1>{"$" + balance}</h1>
    </div>
  );
};
export default Balance;
