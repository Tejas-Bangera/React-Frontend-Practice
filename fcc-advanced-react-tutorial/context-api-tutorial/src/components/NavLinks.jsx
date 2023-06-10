import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="navbar-links-container">
      <div>
        <a href="#" className="navbar-item">
          Home
        </a>
        <a href="#" className="navbar-item">
          About
        </a>
      </div>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavLinks;
