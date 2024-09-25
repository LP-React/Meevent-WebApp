import React from 'react'

//Components
import { Logo } from './Nav/Logo'
import { Options } from './Nav/Options'
import { Language } from './Nav/Language'
import { LogSign } from './Nav/LogSign'


//Styled-Components
import { NavStyled } from '../styled-components/NavStyled';
import { IconStyled } from '../styled-components/Nav/IconStyled';
import { ConfigContainerStyled } from '../styled-components/Nav/ConfigContainerStyled'
import { LinkLogo } from '../styled-components/Nav/LogoStyled'




export const Nav = ({ $theme, onSelectMode }) => {

    return (
        <NavStyled $theme={$theme}>

            <LinkLogo to="/"> <Logo /></LinkLogo>

            <Options $theme={$theme}/>

            <ConfigContainerStyled>

                <Language />
                <IconStyled src={`./../src/assets/icons/${$theme}.png`} onClick={onSelectMode} />
                <LogSign />

            </ConfigContainerStyled>

        </NavStyled >
    )
}
