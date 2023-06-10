import { useState } from "react";
import { frameworks } from "../data";
import "./form.css";
import { useGlobalContext } from "../App";

const Form = () => {
  const { users: commonUsers, setUsers: setCommonUsers } = useGlobalContext();
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("password")
    )
      return;

    const newUser = Object.fromEntries(formData);
    setCommonUsers([...commonUsers, newUser]);
    event.currentTarget.reset();
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
            <input type="text" id="name" className="form-input" name="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" className="form-input" name="email" />
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
            />
          </div>
          <div className="form-row">
            <label htmlFor="framework">Framework</label>
            <select
              name="framework"
              id="framework"
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
              name="signed-in"
              checked={signedIn}
              onChange={() => setSignedIn(!signedIn)}
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
