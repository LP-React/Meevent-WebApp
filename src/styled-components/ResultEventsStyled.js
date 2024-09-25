import styled from "styled-components";
import { PreviewEvent } from "../components/EventsList/PreviewEvent";

//CONTAINERS MAIN - RESULTS - PREVIEW - 

const black = '#212930'
const white = '#F3F5F7'

export const ResultStyled = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0;
`

export const ResultEventsStyled = styled.div`
    width: 30%;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-right: 5px solid ${props => props.$theme == 'light-mode' ? black : white} ;
`

export const PreviewEventStyled = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`
