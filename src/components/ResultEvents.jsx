import React, { useEffect, useState } from 'react'
import { PreviewEventStyled, ResultEventsStyled, ResultStyled } from '../styled-components/ResultEventsStyled'
import { Event } from './EventsList/Event'
import { PreviewEvent } from './EventsList/PreviewEvent'

import { isSameWeek, isToday, isTomorrow, parse, isSameMonth, isAfter } from "date-fns";


import eventsData from './../data/events.json'

export const ResultEvents = ({ eventToSearch, $theme }) => {

  //Desestructuracion de evento a buscar
  const { title: eventToSearchTitle, timeStart: eventToSearchTimeStart, location: eventToSearchLocation } = eventToSearch;

  //Preview State -->
  const [eventPreview, setEventPreview] = useState(eventsData[0])

  const onSelectEvent = (code) => {
    const selectedEvent = eventsData.find(evento => evento.code === code);
    setEventPreview(selectedEvent)
  }

  //Filtra los eventos segun fecha

  let currentTime = new Date();

  const listEvents = (event) => {
    switch (eventToSearchTimeStart) {
      case 'All':
        return isAfter(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime), currentTime)
          && (event.title.toLowerCase().includes(eventToSearchTitle.toLowerCase()));
      case 'Today':
        return isToday(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime))
          && (event.title.toLowerCase().includes(eventToSearchTitle.toLowerCase()));
      case 'Tomorrow':
        return isTomorrow(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime))
          && (event.title.toLowerCase().includes(eventToSearchTitle.toLowerCase()));
      case 'This Week':
        return isSameWeek(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime), currentTime) &&
          isAfter(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime), currentTime)
          && (event.title.toLowerCase().includes(eventToSearchTitle.toLowerCase()));
      case 'This Month':
        return isSameMonth(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime), currentTime) &&
          isAfter(parse(event.timeStart, 'yyyy-MM-dd HH:mm:ss', currentTime), currentTime)
          && (event.title.toLowerCase().includes(eventToSearchTitle.toLowerCase()));
      default:
        return false;
    }
  };

  //  Previsualiza al momento de cambiar de filtro
  // useEffect(() => {
  //   const filteredEvents = eventsData.filter(event => listEvents(event));
  //   if (filteredEvents.length > 0) {
  //     setEventPreview(filteredEvents[0]);
  //   } else {
  //     setEventPreview('');
  //   }
  // }, [eventToSearch])



  return (
    <ResultStyled>
      <ResultEventsStyled $theme={$theme}>
        {eventsData.map(event => listEvents(event) ?
          <Event image={event.image} title={event.title} key={event.code} code={event.code} onSelect={() => onSelectEvent(event.code)} />
          : '')}
      </ResultEventsStyled>

      <PreviewEventStyled>
        <PreviewEvent event={eventPreview} $theme={$theme} />
      </PreviewEventStyled>

    </ResultStyled>
  )
}
