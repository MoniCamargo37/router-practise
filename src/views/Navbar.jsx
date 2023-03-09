import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/contact" className="navLink">
        Contact
      </Link>
      <Link to="/projects" className="navLink">
        Projects
      </Link>
    </div>
  );
}

export default Navbar;
