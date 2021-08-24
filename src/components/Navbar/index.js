import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './Navbarelements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo>
                      Traveller
                  </NavLogo>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
