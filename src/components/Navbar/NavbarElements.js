import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background-color: transparent;
    height:80px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:1rem;
    position:relative;
    top:0;
    z-index:3;
    @media screen and (max-width:960px){
        transition:0.8s all ease
    }


`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width: 80%;

`;

export const NavLogo = styled(LinkRouter)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display: block;
        position:absolute;
        top: 0;
        right:0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width:768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height:90px;
`;

export const NavLinks = styled(LinkScroll)`
    color: white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    font-size: 12px;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid #01bf71
    }

`;