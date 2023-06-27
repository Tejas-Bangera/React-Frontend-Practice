import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const { id, addTransaction } = useContext(GlobalContext);

  function onSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id,
      title,
      amount: Number(amount),
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount(0);
  }

  return (
    <div>
      <h3 className="component-title" id="add-transaction-title">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Transaction title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <p>Negative-Expense, Positive-Income</p>
        <input
          type="number"
          id="amount"
          placeholder="0"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit" id="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddTransaction;
