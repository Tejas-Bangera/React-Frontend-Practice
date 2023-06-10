import { useState } from "react";
import "./navbar.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logout = () => setUser(null);

  return (
    <nav className="navbar-container">
      <h4 className="navbar-title">CONTEXT API</h4>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;
