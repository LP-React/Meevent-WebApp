import styled from "styled-components";


export const SearchFormStyled = styled.form`
    display: flex;
    align-items: center;
    width: 65%;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'Inter';
    outline: 2px solid #F3F5F7;
    background-color: #F3F5F7;
    transition: 0.2s;
    &:hover{
        outline: 2px solid #D1232F;
    }
`

export const SearchDefaultStyled = styled.input`
    height: 60%;
    letter-spacing: 1px;
    padding: 0px;
    outline: none;
    border: none;
    border-right: 2px solid black;
    background-color: transparent;
`

export const SearchNameStyled = styled(SearchDefaultStyled)`
    width: 65%;
    padding: 0 0 0 15px;
`
export const SearchCountryStyled = styled(SearchDefaultStyled)`
    width: 35%;
    padding: 0 0 0 15px;
`

export const SearchButtonStyled = styled.button`
    min-width: 50px;
    border: 0px;
    cursor: pointer;
    
    outline: none;
    background-color: transparent;

    transition: 2s;
`