import React from 'react';
import { LinkStyled, OptionStyled } from '../../styled-components/Nav/OptionStyled';

export const Options = ({$theme}) => {
    return (
        <OptionStyled>
            <LinkStyled $theme={$theme} to="/">Find Events</LinkStyled>
            <LinkStyled $theme={$theme} to="/create-event">Create Events</LinkStyled>
            <LinkStyled $theme={$theme} to="/find-plans">Find Plans</LinkStyled>
            <LinkStyled $theme={$theme} to="/create-plans">Create Plans</LinkStyled>
        </OptionStyled>
    );
};