import React from 'react'
import { LogSignStyled } from '../../styled-components/Nav/LogSignStyled'
import { LogInButton } from './LogInButton'
import { SignUpButton } from './SignUpButton'

export const LogSign = () => {
    return (
        <LogSignStyled>
            <LogInButton />
            <SignUpButton />
        </LogSignStyled>
    )
}
