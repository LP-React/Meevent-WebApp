import React from 'react'
import { FooterStyled, LogoFooterStyled, OptionStyled, OptionsFooterStyled } from '../styled-components/FooterStyled'
import LogoPng from './../assets/images/logo.png'


export const Footer = ({$theme}) => {

  const options = ['FAQ', 'About Us', 'Policy and privacity', 'Find Events', 'Create Events', 'Find plans', 'Create Plans']


  return (
    <FooterStyled $theme = {$theme}>
        <LogoFooterStyled src={LogoPng}/>
        <OptionsFooterStyled>
            {options.map(option => 
              <OptionStyled key={option}>{option}</OptionStyled>
             )}
        </OptionsFooterStyled>
    </FooterStyled>
  )
}
