import { useGlobalContext } from "../App";
import "./users.css";
import { data } from "../data";

const Users = () => {
  const { users: commonUsers, setUsers: setCommonUsers } = useGlobalContext();

  const handleRemoveUser = (email) => {
    const updatedUsers = commonUsers.filter((user) => user.email !== email);
    setCommonUsers(updatedUsers);
  };

  const handleClearUsers = () => {
    setCommonUsers([]);
  };
  const handleResetUsers = () => {
    setCommonUsers(data);
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
                onClick={() => handleRemoveUser(user.email)}
                className="user-remove-button"
              >
                Remove
              </button>
            </div>
          );
        })}
        {commonUsers.length < 1 ? (
          <button
            type="button"
            className="users-clear-button"
            onClick={handleResetUsers}
          >
            Reset
          </button>
        ) : (
          <button
            type="button"
            className="users-clear-button"
            onClick={handleClearUsers}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
};
export default Users;
