import { FaBars } from 'react-icons/fa';


import logo from './logo.svg';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
        <NavLogo to='/' ><img src={logo} alt="logo" style={{ height: "40px", width: "40px", margin: "0 10px 0 0" }}/>Spotify</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='discover'>Premium</NavLinks>
            </NavItem>
            <NavItem className="routeAlbum">
              <NavLinks to='album'>Album</NavLinks>
            </NavItem>
            <NavItem className="routeAdd">
              <NavLinks to='addalbum'>AddAlbum</NavLinks>
            </NavItem>          
          </NavMenu>
          <NavBtn>
            <NavBtnLink2 to='signup'>Sign Up</NavBtnLink2> 
            <NavBtnLink to='signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
