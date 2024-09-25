import React from 'react'

import { PreviewHeader } from './PreviewHeader';
import { PreviewInfo } from './PreviewInfo';
import { PreviewBuy } from './PreviewBuy';

import { PreviewStyled } from '../../styled-components/EventsList/PreviewStyled'

export const PreviewEvent = ({event, $theme}) => {


    return (
        <PreviewStyled $theme={$theme}>

            <PreviewHeader event={event} $theme={$theme}/>

            <PreviewInfo event={event} $theme={$theme}/>

            <PreviewBuy event={event} $theme={$theme}/>

        </PreviewStyled>
    )
}
