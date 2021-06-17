import * as Styles from './styles'


const Button = (props) => {
  return (
    props.type === 'arrow' ?
      (
        <Styles.ArrowButton {...props}>
          {props.children}
        </Styles.ArrowButton>
      ) : (
        <Styles.Button {...props}>
          {props.children}
        </Styles.Button>
      )
  )
}

export default Button
