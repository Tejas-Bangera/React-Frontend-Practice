import { data } from "./data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./user-actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, users: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, users: data };
  }
  if (action.type === REMOVE_ITEM) {
    let updatedUsers = state.users.filter(
      (user) => user.email !== action.payload.email
    );
    return { ...state, users: updatedUsers };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
