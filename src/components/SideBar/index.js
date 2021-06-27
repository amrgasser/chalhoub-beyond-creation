import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarHeader,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggleSideBar}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSideBar}>
      {/* <SidebarHeader> */}
        <Icon onClick={toggleSideBar}>
          <CloseIcon />
        </Icon>
      {/* </SidebarHeader> */}
      <SidebarWrapper>
        <SidebarMenu >
          <SidebarLink onClick={toggleSideBar} to="/">HOME</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">OUR GROUP</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">OUR ACTIVITIES</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">SUSTAINABILITY</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">MEDIA</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">CAREERS</SidebarLink>
          <SidebarLink onClick={toggleSideBar} to="/">CONTACT US</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
