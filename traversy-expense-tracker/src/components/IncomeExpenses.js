import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((cash) => cash > 0)
    .reduce((acc, cash) => (acc += cash), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((cash) => cash < 0).reduce((acc, cash) => (acc += cash), 0) *
    -1
  ).toFixed(2);

  return (
    <div id="income-expense-container">
      <div id="income-container">
        <p>Income</p>
        <p id="income">{"$" + income}</p>
      </div>
      <div id="expense-container">
        <p>Expense</p>
        <p id="expense">{"$" + expense}</p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
