import React, { useState } from 'react'
import { SearchEvents } from '../components/SearchEvents'
import { ResultEvents } from '../components/ResultEvents'

export const FindEvents = ({ $theme, }) => {

    const [eventToSearch, setEventToSearch] = useState({
        code: 0,
        title: '',
        location: '',
        timeStart: 'All',
    })

    const filters = {
        selectNameFilter(name) {
            setEventToSearch((prevEvent) => ({
                ...prevEvent,
                title: name
            }))
        },
        selectLocationFilter(location) {
            setEventToSearch((prevEvent) => ({
                ...prevEvent,
                location: location
            }))
        },

        selectDateFilter(date) {
            setEventToSearch((prevEvent) => ({
                ...prevEvent,
                timeStart: date
            }))
        }
    }

    return (
        <>
            <SearchEvents
                dateFilter={eventToSearch.timeStart}
                onSelectDateFilter={filters.selectDateFilter}
                nameFilter={filters.selectNameFilter}
                locationFilter={filters.selectLocationFilter}
            />
            <ResultEvents $theme={$theme} eventToSearch={eventToSearch} />
        </>
    )
}
