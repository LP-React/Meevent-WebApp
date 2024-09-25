import styled from "styled-components";
import { Link } from 'react-router-dom';

const darkColor = '#212A31'
const lightColor = '#F3F5F7'
const red = '#D1232F';


export const OptionStyled = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-evenly;  
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    transition: 0.2s;

    &:hover {
        color: ${red};
    }
`