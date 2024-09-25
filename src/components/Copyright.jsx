import React from 'react'
import { CopyrightAutorStyled, CopyrightStyled } from '../styled-components/CopyrightStyled'

export const Copyright = () => {
  return (
    <CopyrightStyled className="copyright">
    <span>
      Copyright © Meevent by{' '}<CopyrightAutorStyled href="https://github.com/LP-React" target="_blank" className="copyright__github link">- LP-React -</CopyrightAutorStyled>{' '}. All Rights Reserved.
    </span>
  </CopyrightStyled>
  )
}
