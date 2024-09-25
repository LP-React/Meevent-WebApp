import React, { useState } from 'react'
import { DivDateStyled, FormCreateEventStyled, DivTicketStyled, InputFormStyled, FormTitleStyled, FormSubtitleStyled, InputFormSummaryStyled, FormMapStyled, InputFormAboutStyled, CreateButtonStyled } from './../styled-components/CreateEventStyled'

export const FormCreateEvent = ({ $theme, onChangeEvent, eventCreated }) => {


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeEvent({
            ...eventCreated,
            [name]: value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onChangeTimeStart = (event) => {

        const date = event.target.value

        onChangeEvent({
            ...eventCreated,
            timeStart: date,
            timeEnd: date
        })
    }

    const onChangeTimeStartHour = (event) => {

        const hour = event.target.value

        onChangeEvent({
            ...eventCreated,
            timeStart: eventCreated.timeStart + " " + hour
        })
    }

    const onChangeTimeEnd = (event) => {

        const hour = event.target.value
        onChangeEvent({
            ...eventCreated,
            timeEnd: eventCreated.timeEnd + " " + hour
        })
    }



    return (


        <FormCreateEventStyled onSubmit={(event) => { onSubmit(event) }}>

            <FormTitleStyled>Create your event</FormTitleStyled>
            <FormSubtitleStyled>Add all of your event details and let attendees know what to expect</FormSubtitleStyled>

            <InputFormStyled name="image"  placeholder='URL image' onChange={handleInputChange} />
            <InputFormStyled name="title" placeholder='Event Title' onChange={handleInputChange} />
            <InputFormSummaryStyled name="description" placeholder='Summary' onChange={handleInputChange} />

            <DivDateStyled>
                <InputFormStyled type='date' placeholder='Date' onChange={(event) => onChangeTimeStart(event)} />
                <InputFormStyled type='time' placeholder='Start Time' onChange={(event) => onChangeTimeStartHour(event)} />
                <InputFormStyled type='time' placeholder='End Time' onChange={(event) => onChangeTimeEnd(event)} />
            </DivDateStyled>

            <InputFormStyled name="location" placeholder='Location' onChange={handleInputChange} />
            <FormMapStyled></FormMapStyled>
            <InputFormAboutStyled name="about" placeholder='About' onChange={handleInputChange} />

            <DivTicketStyled>
                <InputFormStyled name="ticketName" placeholder='Ticket Name' onChange={handleInputChange} />
                <InputFormStyled name="price" placeholder='Price' onChange={handleInputChange} />
                <InputFormStyled name="maxAttendees" placeholder='Max Attendees' onChange={handleInputChange} />
            </DivTicketStyled>

            <CreateButtonStyled>Create Event</CreateButtonStyled>


        </FormCreateEventStyled>

    )
}
