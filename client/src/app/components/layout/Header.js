import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

// Custom components
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navbar
        className="bg-purple-500"
        color="white"
        expand="md"
        light
      >
        <NavbarBrand className="text-white" tag={RRNavLink} to="/home">
          PGM Platform
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
          <Navigation/>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;