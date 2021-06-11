import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {GlobalStyles} from './constants/globalStyles'
import {theme} from './constants/theme'

const StyledDiv = styled.div`
  font-size: 48px;
  font-weight: 700;
`


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <StyledDiv>
        Lorem ipsum dolor sit
        amet, consectetur
        adipiscing elit sedfd
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
