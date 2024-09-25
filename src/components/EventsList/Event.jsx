import React, { useState } from 'react'
import { EventStyled, ImageEventStyled, TitleEventStyled } from '../../styled-components/EventsList/EventStyled'

export const Event = ({image, title, onSelect}) => {





  //FOCUS
  const [focus, setFocus] = useState(false)

  const onMouseOverEvent = () => {
    setFocus(true)
  }
  const onMouseOutEvent = () => {
    setFocus(false)
  }

  return (
    <EventStyled onMouseOver={onMouseOverEvent} onMouseOut={onMouseOutEvent} onClick={onSelect}>

      <ImageEventStyled src={image} $focus={focus}/>

      {focus ? <TitleEventStyled>{title}</TitleEventStyled> : null };

    </EventStyled>
  )
}
