import React from 'react'
import { PreviewInfoMapStyled, PreviewInfoStyled, PreviewInfoSubtitleStyled, PreviewLinkStyled } from '../../styled-components/EventsList/PreviewStyled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import { format } from "date-fns";



export const PreviewInfo = ({ event, $theme }) => {

    const { timeStart, timeEnd, description, location } = event;

    const startTime = format(new Date(timeStart), 'EEEE, MMMM d | HH:mm');
    const endHourTime = format(new Date(timeEnd), 'HH:mm');


    return (
        <PreviewInfoStyled $theme={$theme}>

            <div>{description}</div>
            <PreviewLinkStyled href=''>Read More</PreviewLinkStyled>

            <PreviewInfoSubtitleStyled>Date and time</PreviewInfoSubtitleStyled>
            <div><FontAwesomeIcon icon={faCalendarDays} size='1x' /> {startTime} - {endHourTime}</div>


            <PreviewInfoSubtitleStyled>Location</PreviewInfoSubtitleStyled>
            <div><FontAwesomeIcon icon={faLocationDot} size='1x' /> {location}</div>

            <PreviewInfoMapStyled />

        </PreviewInfoStyled>
    )
}
