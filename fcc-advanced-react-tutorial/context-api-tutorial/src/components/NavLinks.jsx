import UserContainer from "./UserContainer";

const NavLinks = () => {
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
      <UserContainer />
    </div>
  );
};
export default NavLinks;
