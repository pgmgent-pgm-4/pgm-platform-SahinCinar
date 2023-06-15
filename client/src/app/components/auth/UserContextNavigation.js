import { NavLink as RRNavLink } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';

import * as routes from '../../routes';

import { useAuth } from '../../context/auth.context';

const UserContextNavigation = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {!!currentUser
        ? (
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              className="text-white"
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavItem>
              <NavLink className="text-white" tag={RRNavLink} to={routes.AUTH_SIGN_IN}>Login</NavLink>
            </NavItem>
              </DropdownItem>
              <DropdownItem>
               <NavItem>
              <NavLink className="text-white" tag={RRNavLink} to={routes.AUTH_SIGN_UP}>Sign Up</NavLink>
            </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )
        : ()  => {
          return null;
        }
      } 
    </>
  )
};

export default UserContextNavigation;
