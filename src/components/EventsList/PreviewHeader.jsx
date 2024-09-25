import React, { useState } from 'react'
import { PreviewAutorStyled, PreviewHeaderDateStyled, PreviewHeaderStyled, PreviewLikeStyled, PreviewLinkStyled, PreviewTitleStyled } from '../../styled-components/EventsList/PreviewStyled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

export const PreviewHeader = ({event}) => {

    const [favorite, setFavorite] = useState(false)

    const addFavorites = () => {
        setFavorite(!favorite)
    }

    return (
        <PreviewHeaderStyled $bgimg={event.image}>

            <PreviewHeaderDateStyled>{event.dateExample}</PreviewHeaderDateStyled>

            <PreviewTitleStyled>{event.title}</PreviewTitleStyled>

            <PreviewAutorStyled>
                By <PreviewLinkStyled href="">{event.autor}</PreviewLinkStyled>
            </PreviewAutorStyled>

            <PreviewLikeStyled icon={favorite ? faHeartSolid :  faHeartRegular} size='2x' onClick={addFavorites} color={favorite ? '#D1232F' :  '#F3F5F7'} />

        
        </PreviewHeaderStyled>
    )
}