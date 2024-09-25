import styled from "styled-components";

const darkColor = '#212930'
const lightColor = '#F3F5F7'

export const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: Inter;
    border-bottom: 2px solid ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    background-color: ${props => props.$theme == 'light-mode' ? lightColor : darkColor};
    color : ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    font-size: 18px;
    transition: 0.2s;
    padding: 0.1px;
    z-index: 100;
`;