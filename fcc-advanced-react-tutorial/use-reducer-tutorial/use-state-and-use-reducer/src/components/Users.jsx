import "./users.css";
import { data } from "../data";
import { useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "../user-actions";
import reducer from "../user-reducer";

const defaultState = {
  users: data,
  isLoading: false,
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleRemoveUser = (email) => {
    dispatch({ type: REMOVE_ITEM, payload: { email } });
  };

  const handleClearUsers = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const handleResetUsers = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <>
      <div className="users-container">
        <h2>Users</h2>
        {state.users.map((user) => {
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
        {state.users.length < 1 ? (
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
