import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bar">
      <NavLink className="navbar navbar-light text-light bg-purple " to={"/"}>
        WikiCountries
      </NavLink>
    </div>
  );
}

export default Navbar;
