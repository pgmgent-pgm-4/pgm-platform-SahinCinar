import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';

const routes = [
  {
    title: 'Opleiding',
    type: 'internal',
    path: '/opleiding'
  },
  {
    title: "Curriculum",
    type: 'internal',
    path: '/curriculum'
  },
  {
    title: 'Portfolio',
    type: 'internal',
    path: '/portfolio'
  },
  {
    title: 'Blog',
    type: 'internal',
    path: '/blog'
  },
  {
    title: 'Services',
    type: 'internal',
    path: '/services'
  },
  {
    title: 'Team',
    type: 'internal',
    path: '/team'
  },
  {
    title: 'Search',
    type: 'internal',
    path: '/search'
  }
];

const Navigation = () => {
  
  return (
    <>
      <Nav
      
        className="me-auto"
        navbar
        
      >
        {routes && routes.map(route => 
          <NavItem key={route.path}>
            <NavLink className="text-white" tag={RRNavLink} to={route.path}>
              {route.title}
            </NavLink>
          </NavItem>
        )}
       
      </Nav>
      <Nav>
        <UserContextNavigation/>
      </Nav>
    </>
  )
};

export default Navigation;