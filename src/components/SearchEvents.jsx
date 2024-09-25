import React, { useState } from 'react'
import { MainStyled } from '../styled-components/MainStyled'
import { Title } from './SearchEvents/Title'
import { SearchBar } from './SearchEvents/SearchBar'

export const SearchEvents = ({onSelectDateFilter, nameFilter, dateFilter, locationFilter}) => {

  return (
    <MainStyled>
        <Title/>
        <SearchBar onSelectDateFilter={onSelectDateFilter} dateFilter={dateFilter} nameFilter={nameFilter} locationFilter={locationFilter}/>
    </MainStyled>
  )
  
}
