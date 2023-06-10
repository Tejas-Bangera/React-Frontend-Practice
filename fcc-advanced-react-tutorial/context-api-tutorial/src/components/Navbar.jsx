import { createContext, useContext, useState } from "react";
import "./navbar.css";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();
export const useNavbarContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logout = () => setUser(null);

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar-container">
        <h4 className="navbar-title">CONTEXT API</h4>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
