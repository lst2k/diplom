import styled from 'styled-components'

import {mainColors} from '../../constants/theme'


export const SvgIcon = styled.span`
  cursor: pointer;
  > * path {
    transition: all 0.15s;
    fill: ${props => props.defaultFill ? props.defaultFill : mainColors.basicTextColor};
  }
  :hover {
    > * path {
      fill: ${props => props.fill}
    }
  }
`
