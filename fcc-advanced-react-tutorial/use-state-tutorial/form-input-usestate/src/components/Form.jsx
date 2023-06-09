import { useState } from "react";
import "./form.css";
import { data } from "../data";

const Form = ({ commonUsers, setCommonUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) return;

    const newUser = { name, email };
    setCommonUsers([...commonUsers, newUser]);
    setName("");
    setEmail("");
  };
  return (
    <>
      <div className="form-container">
        <h2 className="form-header">Add Users</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="John Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-input"
              placeholder="example@org.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
