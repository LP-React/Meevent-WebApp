import React, { useState } from 'react'


//Styled-Components
import { IconStyled } from '../../styled-components/Nav/IconStyled'
import { LanguageContainer} from '../../styled-components/Nav/LanguageStyled';

export const Language = () => {

    const languages = ['EN', 'SP', 'FR', 'CH'];

    const [language, setLanguage] = useState(languages[0]);


    return (
        <LanguageContainer>
            <span>{language}</span>
        </LanguageContainer>
    )
}
