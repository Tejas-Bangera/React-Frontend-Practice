const AddTransaction = () => {
  return (
    <div>
      <h3 className="component-title" id="add-transaction-title">
        Add new transaction
      </h3>
      <form action="#">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Transaction title..." />
        <label htmlFor="amount">Amount</label>
        <p>Negative-Expense, Positive-Income</p>
        <input type="number" id="amount" placeholder="0" />
        <button id="submit-button">Submit</button>
      </form>
    </div>
  );
};
export default AddTransaction;
