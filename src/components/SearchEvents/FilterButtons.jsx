import React from 'react'
import { ButtonStyled } from '../../styled-components/SearchEvents/ButtonStyled'
import { FiltersStyled } from '../../styled-components/SearchEvents/FiltersStyled'

import { addDays } from "date-fns";

export const FilterButtons = ({ onSelectFilterDate, active }) => {

  const dateFilters = ['All', 'Today', 'Tomorrow', 'This Week', 'This Month']

  return (
    <FiltersStyled>
      {dateFilters.map(dateFilter =>
        <ButtonStyled onClick={() => onSelectFilterDate(dateFilter)} key={dateFilter} $active={dateFilter == active ? true : false}>
          {dateFilter}
        </ButtonStyled>
      )}
    </FiltersStyled>
  )
}
