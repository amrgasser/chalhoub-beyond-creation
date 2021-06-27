import styled from "styled-components";

import {Link} from 'react-scroll'

export const Button = styled(Link)`
    background: ${({primary}) =>(primary? '#fff' : 'transparent')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px': '12px 30px')}
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform:scale(1.2);
    }
`