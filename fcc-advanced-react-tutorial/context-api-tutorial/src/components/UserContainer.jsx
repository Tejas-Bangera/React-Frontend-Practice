const UserContainer = ({ user, logout }) => {
  return (
    <div className="login-info-container">
      <p className="login-info">Hello there! {user?.name?.toUpperCase()}</p>
      {user ? (
        <button className="login-info-button" type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="login-info-button" type="button" onClick={logout}>
          Login
        </button>
      )}
    </div>
  );
};
export default UserContainer;
