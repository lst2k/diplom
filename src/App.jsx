import React from 'react'
import {ThemeProvider} from 'styled-components'

import {GlobalStyles} from './constants/globalStyles'
import {theme} from './constants/theme'
import SiteRouter from './router'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SiteRouter />
    </ThemeProvider>
  )
}

export default App
