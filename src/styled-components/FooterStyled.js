import styled from "styled-components";

const darkColor = '#212A31'
const lightColor = '#F3F5F7'

export const FooterStyled = styled.footer`
    width: 100%;
    display: flex;
    border-top: 2px solid ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    background-color: ${props => props.$theme == 'light-mode' ? lightColor : darkColor};
    transition: 0.3s;
    justify-content: center;
    align-items: center;
`

export const LogoFooterStyled = styled.img`
    height: 20px;
`

export const OptionsFooterStyled = styled.div`
    color : ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    max-height: 100px;
    display: flex;
    flex-flow: column wrap;
    margin: 20px 150px;
`
export const OptionStyled = styled.a`
text-align: center;
    padding: 15px 25px;
    text-decoration: none;
    color: ${props => props.$theme == 'light-mode' ? darkColor : lightColor};
    font-family: 'Inter';
`