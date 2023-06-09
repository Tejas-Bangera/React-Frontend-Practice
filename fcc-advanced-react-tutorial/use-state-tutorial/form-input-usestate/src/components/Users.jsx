import "./users.css";
import { useState } from "react";

const Users = ({ commonUsers, setCommonUsers }) => {
  const handleClick = (email) => {
    const updatedUsers = commonUsers.filter((user) => user.email !== email);
    setCommonUsers(updatedUsers);
  };
  return (
    <>
      <div className="users-container">
        <h2>Users</h2>
        {commonUsers.map((user) => {
          return (
            <div key={user.email} className="user-row">
              <div>{user.name}</div>
              <button
                type="button"
                onClick={() => handleClick(user.email)}
                className="user-remove-button"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Users;
