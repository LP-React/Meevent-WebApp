import styled from "styled-components";


const white = '#F3F5F7';
const red = '#D1232F';
const black = '#212930';

export const CreateEventStyled = styled.div`
    padding: 100px 0px;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Inter';
`

export const PreviewCreateEventStyled = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    height: 50%;
`

export const FormCreateEventStyled = styled.form`
    width: 30%;
    min-width: 460px;
    display: flex;
    flex-flow: column;

    input {
        border-radius: 5px;
        width: 100%;
        border: none;
        margin: 6px 0;
        padding: 12px 15px;
        outline: none;
    }
`

export const FormTitleStyled = styled.h1`
    font-weight: 500;
    margin: 0 0 10px;
`

export const FormSubtitleStyled = styled.p`
    font-weight: 500;
    margin: 0 0 10px;
`

export const FormMapStyled = styled.div`
    border-radius: 5px;
    background-color: white;
    height: 200px;
    width: 100%;
    margin: 6px 0;

`


export const InputFormStyled = styled.input`
`

export const InputFormSummaryStyled = styled.textarea`
    height: 200px;
    margin: 6px 0;
    border-radius: 5px;
    padding: 12px 15px;
    border: none;
    outline: none;
    resize: none;

`

export const InputFormAboutStyled = styled.textarea`
    height: 200px;
    margin: 6px 0;
    border-radius: 5px;
    padding: 12px 15px;
    border: none;
    outline: none;
    resize: none;

`

//
export const DivDateStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 8px;
`

//
export const DivTicketStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 8px;


`


export const CreateButtonStyled = styled.button`
    margin: 10px 0;
    border: none;
    padding: 18px 30px;
    border-radius: 5px;
    transition: 0.3s;

    font-weight: 500;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
        background-color: ${red};
    }
`

