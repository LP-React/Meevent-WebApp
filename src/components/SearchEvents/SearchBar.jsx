import React, { useState } from 'react'
import { SearchButtonStyled, SearchCountryStyled, SearchFormStyled, SearchNameStyled } from '../../styled-components/SearchEvents/SearchBarStyled'

//FontAwesome-Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FilterButtons } from './FilterButtons';

export const SearchBar = ({onSelectDateFilter, dateFilter, nameFilter, locationFilter }) => {

  const [inputName, setInputName] = useState('');
  const [inputCountry, setInputCountry] = useState('Lima, Perú');


  const onSubmit = (event) => {
    event.preventDefault();
    if (inputName.trim().length <= 1) return;
    if (inputCountry.trim().length <= 1) return;

    nameFilter(inputName);
    locationFilter(inputCountry);
  }

  const onInputNameChange = (event) => {
    setInputName(event.target.value);
    onSelectDateFilter('All')
  } 

  const onInputCountryChange = (event) => {
    setInputCountry(event.target.value);
    onSelectDateFilter('All')
  }

  const onSelectFilterDate = (date) => {
    if (date == dateFilter) return;
    onSelectDateFilter(date);
  }

  return (
    <>
      <SearchFormStyled onSubmit={(event) => { onSubmit(event) }}>

        <SearchNameStyled placeholder='Search...' value={inputName} onChange={(event) => onInputNameChange(event)} />

        <SearchCountryStyled placeholder='Country...' value={inputCountry} onChange={(event) => onInputCountryChange(event)} />

        <SearchButtonStyled>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchButtonStyled>

      </SearchFormStyled>

      <FilterButtons onSelectFilterDate={onSelectFilterDate} active={dateFilter} />
    </>
  )
}
