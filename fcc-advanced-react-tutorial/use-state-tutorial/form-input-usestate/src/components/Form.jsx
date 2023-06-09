import { useState } from "react";
import "./form.css";
import { frameworks } from "../data";

const Form = ({ commonUsers, setCommonUsers }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    keepSignedIn: false,
  });
  const [framework, setFramework] = useState("React");

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleKeepSignedIn = (event) => {
    setUser({ ...user, keepSignedIn: event.target.checked });
  };

  const handleFramework = (event) => {
    setFramework(() => event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email || !user.password) return;

    setCommonUsers([...commonUsers, user]);
    console.log(commonUsers);
    setUser({ name: "", email: "", password: "", keepSignedIn: false });
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
              name="name"
              value={user.name}
              onChange={handleChange}
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
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              name="password"
              placeholder=""
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="framework">Framework</label>
            <select
              name="framework"
              id="framework"
              value={framework}
              onChange={handleFramework}
              className="frame-work-select"
            >
              {frameworks.map((framework) => {
                return <option key={framework}>{framework}</option>;
              })}
            </select>
          </div>
          <div className="form-sign-in-row">
            <input
              type="checkbox"
              id="signed-in"
              checked={user.keepSignedIn}
              onChange={handleKeepSignedIn}
            />
            <label htmlFor="signed-in" className="form-signed-in">
              Keep me signed in
            </label>
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
