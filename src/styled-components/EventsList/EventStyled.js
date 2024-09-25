import styled from "styled-components";

export const EventStyled = styled.div`
    position: relative;
    height: 280px;
    width: 80%;
    box-shadow: black 0px 0px 5px;
    border-radius: 12px;
    overflow: hidden;
    margin: 0 0 50px 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        transform: scale(1.02);
        filter: blur(0.2px);
    }
`

export const ImageEventStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(${ props => props.$focus ? '0.5' : '1'});
    transition: 0.2s;
`

export const TitleEventStyled = styled.h3`
    font-family: 'Inter';
    font-size: 2rem;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    color: white;
    padding: 10px;
`