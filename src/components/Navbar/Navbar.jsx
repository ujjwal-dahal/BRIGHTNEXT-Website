import { HashLink } from 'react-router-hash-link';
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <p className="nav-title" style={{color:"#030631"}}>BrightNext</p>
      <main>
        <HashLink smooth to="/#home" className="nav-link">Home</HashLink>
        <HashLink smooth to="/#about" className="nav-link">About</HashLink>
        <HashLink smooth to="/#brands" className="nav-link">Brands</HashLink>
        <NavLink smooth to="/contact" className="nav-link">Contact</NavLink>
        <HashLink smooth to="/services" className="nav-link">Services</HashLink>
      </main>
    </nav>
  );
};

export default Navbar;
