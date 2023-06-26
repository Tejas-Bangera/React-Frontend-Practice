const Transaction = ({ id, title, amount }) => {
  return (
    <li className="transaction">
      <span>{title}</span>
      <div>
        <span>{amount}</span> <button id="delete-button">x</button>
      </div>
    </li>
  );
};
export default Transaction;
