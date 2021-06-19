import styled, {css} from 'styled-components'

import {mainColors} from '../../constants/theme'


export const Button = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 36px;
  display: inline-block;
  outline: none;
  transition: all 0.15s;
  color: #fff;
  ${props => props.type === 'empty' ? css`
    border: 2px solid ${props.borderColor ? props.borderColor : '#fff'};
    background: transparent;
    &:hover {
      border-color: ${mainColors.primary};
      color: ${mainColors.primary};
    }
  ` : null};
  ${props => props.type === 'filled' ? css`
    border: 2px solid transparent;
    background: ${mainColors.primary};
    &:hover {
      background: rgba(95,71,202, 0.8);
    }
  ` : null};
`

Button.defaultProps = {
  type: 'filled'
}

export const ArrowButton = styled.button`
  cursor: pointer;
  border: 2px solid #fff;
  outline: none;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.15s;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    transform: rotate(${props => props.rotate ? props.rotate : '0'}deg);
  }
  &:hover {
    border-color: ${mainColors.primary};
    color: ${mainColors.primary};
    > svg {
      > path {
        fill: ${mainColors.primary};
      }
    }
  }
`
