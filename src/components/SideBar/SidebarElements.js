import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'

import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


export const SidebarContainer=styled.aside`
    position:fixed;
    z-index:999;
    width:40%;
    height:100%;
    background:#000;
    display:grid;
    align-items:center;
    top:0;
    right:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '100%' : '0') };
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')} ;

    @media screen and (max-width: 960px){
        width:100%;

    }

`;

export const CloseIcon = styled(FaTimes)`
    color:#fff
`;

export const Icon = styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline: none;
`;


export const SidebarWrapper=styled.div`
    color: #fff;
`;
export const SidebarLink=styled(LinkScroll)`
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;

    &:hover{
        color: blue;
        transition:0.2s ease-in-out;
    }
`;

export const SidebarHeader=styled.div`
    background-color: green;
    top:0;

    height:50%;
    width:100%;
    align-items:center;
    display: flex;
    flex-direction: row;
`;

export const SidebarMenu=styled.div`
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(8,80px);
    text-align: center

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(8,60px);

    }
`;