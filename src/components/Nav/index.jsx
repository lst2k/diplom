import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import * as Styles from './styles'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'

import logo from 'url:../../images/logo.svg'


const Nav = () => {
  let history = useHistory()

  const handleClick = () => {
    history.push('/')
  }

  return (
    <Styles.Navigation>
      <BaseContainer>

        <Styles.Logo onClick={handleClick}>
          <img src={logo} alt="graphic studio" />
        </Styles.Logo>

        <Styles.Menu>

        </Styles.Menu>

      </BaseContainer>
    </Styles.Navigation>

  )
}

export default Nav
