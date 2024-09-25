import styled from "styled-components";

const white = '#FaFaFa'
const black = '#425361'

export const BodyStyled = styled.div`
    background-color: ${props => props.$theme == 'light-mode' ? white : black };
    transition: 1s;
`