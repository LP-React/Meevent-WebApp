import styled from "styled-components";

const red = '#D1232F'
const white = '#F3F5F7'

export const ButtonStyled = styled.button`
    padding: 10px 20px;
    background-color: ${props => props.$active ? red : white};
    color: ${props => props.$active ? white : red};
    border: 2px solid #B1232F;
    border-radius: 5px;
    font-family: 'Inter';
    margin: 0 10px 0 0;
    cursor: pointer;
    transition: 0.08s;

    &:hover{
    background-color: ${props => props.$active ? '' : '#FA737B'};
    color: white;
    }
`