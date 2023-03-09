import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
        <li>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navLink">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="navLink">
            Projects
          </NavLink>
    
        </li>
    </div>
  );
}

export default Navbar;
