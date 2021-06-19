import React from 'react'

import * as Styles from './styles'


const Button =  React.forwardRef((props, ref) => {
  return (
    props.type === 'arrow' ?
      (
        <Styles.ArrowButton {...props} ref={ref}>
          {props.children}
        </Styles.ArrowButton>
      ) : (
        <Styles.Button {...props} ref={ref}>
          {props.children}
        </Styles.Button>
      )
  )
})

export default Button
