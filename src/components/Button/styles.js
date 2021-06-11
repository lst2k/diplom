import styled, {css} from 'styled-components'


export const Button = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 36px;
  display: inline-block;
  outline: none;
  transition: all 0.15s;
  color: #fff;
  ${props => props.type === 'empty' ? css`
    border: 2px solid #FFFFFF;
    background: transparent;
    &:hover {
      border-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
    }
  ` : null};
  ${props => props.type === 'filled' ? css`
    border: 2px solid transparent;
    background: ${props => props.theme.colors.primary};
    &:hover {
      background: rgba(95,71,202, 0.9);
    }
  ` : null};
`

Button.defaultProps = {
  type: 'filled'
}

export const ArrowButton = styled.button`
  cursor: pointer;
  border: 2px solid #fff;
  display: inline-block;
  outline: none;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.15s;
  padding: 6px 10px;
  > svg {
    transform: rotate(${props => props.rotate ? props.rotate : '0'}deg);
  }
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    > svg {
      > path {
        fill: ${props => props.theme.colors.primary};
      }
    }
  }
`
