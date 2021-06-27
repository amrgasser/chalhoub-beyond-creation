import React from "react";
import { FaBars } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Logo from '../../images/chalhoub-logo.png'

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({toggleSideBar,isOpen}) => {


  return (
      <>
      
      <Nav>
        <NavContainer>
          <NavMenu>
            
            <NavItem>
              <NavLinks to="#">
                <HiOutlineLocationMarker
                  style={{ color: "#aa6c39", paddingRight: "10px", fontSize:'30px'  }}
                />
                FIND A STORE
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="#">
                <FiPhoneCall
                  style={{ color: "#aa6c39", paddingRight: "10px",fontSize:'30px' }}
                />
                CONTACT US
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo to="/"><img src={Logo}  style={{height:'100px',marginTop:'20px'}}/></NavLogo>
          <MobileIcon style={{color:'white'}}onClick={toggleSideBar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="#">
                <IoGlobeOutline
                  style={{ color: "#aa6c39", paddingRight: "10px",fontSize:'30px'  }}
                />
                عربي
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="#">
                <BsSearch style={{ color: "#fff", fontSize:'18px' }} />
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="#" onClick={toggleSideBar}>
                <FaBars style={{ fontSize: "30px" }} />
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
