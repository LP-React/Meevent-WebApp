import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

let lightMode = 'light-mode'

const white = '#F3F5F7';
const red = '#D1232F';
const black = '#212930';

// PREVIEW CONTAINER
export const PreviewStyled = styled.div`
    position: relative;
    width: 80%;
    background-color: ${props => props.$theme == lightMode ? white : black};
    border-radius: 15px;
    padding: 10px ;
    font-family: 'Inter';
    transition: 0.5s;
    box-shadow: rgba(0,0,0,0.7) 0px 0px 15px;

    
    word-break: break-word;
    white-space: normal; 
    overflow-wrap: break-word;


`

export const PreviewLinkStyled = styled.a`
    color: ${white};
`

// PREVIEW HEADER
export const PreviewHeaderStyled = styled.div`
    position: relative;
    height: 250px;
    width: 100%;
    border-bottom: 2px solid;
    border-radius: 10px 10px 0 0;
    background-image: linear-gradient(rgba(0,0,0,0.1) 10%, rgba(0,0,0,1) 98%), url(${props => props.$bgimg});
    background-position: center;
    background-size: cover;
    color: ${white};

`
export const PreviewTitleStyled = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    padding: 15px 75px 40px 15px;
`
export const PreviewAutorStyled = styled.p`
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    padding: 15px;
`
export const PreviewHeaderDateStyled = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    text-shadow: 1px 1px 5px black;
    letter-spacing: 2px;
    font-weight: 400;
`

export const PreviewLikeStyled = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px;
    transition: 0.1s;

    &:active{
        transform: scale(1.1);
    }
`

// INFORMATION 
export const PreviewInfoStyled = styled.div`
    font-weight: 500;
    padding: 12px 10px;
    color: ${props => props.$theme == lightMode ? black : white};
    letter-spacing: 1px;
    line-height: 1.5rem;


`

export const PreviewInfoSubtitleStyled = styled.div`
    margin: 22px 0 4px;
`
export const PreviewInfoMapStyled = styled.div`
    width: 100%;
    height: 250px;
    background-color: white;
    margin: 10px 0 0;
`
// PREVIEW BUY

export const PreviewBuyStyled = styled.div`
    color: ${props => props.$theme == lightMode ? black : white};
    width: 100%;
    font-weight: 500;
`
export const PreviewBuyButtonStyled = styled.button`
    letter-spacing: 2px;
    font-size: 1.4rem;
    margin: 10px 0 0;
    padding: 18px 0;
    outline: none;
    border: none;
    border-radius: 0 0 10px 10px;
    width: 100%;
    transition: 0.15s;
    font-weight: 600;
    background-color: ${red};
    color: ${white};
    border: 2px solid ${red};
    cursor: pointer;

    &:hover{
    background-color: ${white};
    color: ${black};
    }
`