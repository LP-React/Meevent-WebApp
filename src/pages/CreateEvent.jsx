import React, { useEffect, useState } from 'react'
import { FormCreateEvent } from '../components/FormCreateEvent'
import { PreviewEvent } from '../components/EventsList/PreviewEvent'
import { CreateEventStyled, PreviewCreateEventStyled } from '../styled-components/CreateEventStyled';

export const CreateEvent = ({ $theme }) => {

  const [event, setEvent] = useState({
    image: '',
    title: '',
    location: '',
    timeStart: '2024-07-27',
    timeEnd: '2024-07-27'
  });

  const onHandleEvent = (eventInput) => {
    setEvent(eventInput)
  }

  useEffect(
    () => console.log(event), [event]
  )



  return (
    <CreateEventStyled>
      <FormCreateEvent $theme={$theme} onChangeEvent = {onHandleEvent}  eventCreated = {event}/>
      <PreviewCreateEventStyled>
        <PreviewEvent $theme={$theme} event={event} />
      </PreviewCreateEventStyled>
    </CreateEventStyled>
  )
}
