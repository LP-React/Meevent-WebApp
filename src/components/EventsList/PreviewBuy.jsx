import React from 'react'
import { PreviewBuyButtonStyled, PreviewBuyStyled } from '../../styled-components/EventsList/PreviewStyled'

export const PreviewBuy = ({event, $theme}) => {


    return (
        <PreviewBuyStyled $theme = {$theme}>
            <p> General Admision: {event.price}</p>
            <PreviewBuyButtonStyled>Reserve a Spot</PreviewBuyButtonStyled>
        </PreviewBuyStyled>
    )
}
