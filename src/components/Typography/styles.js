import styled from 'styled-components'

import {SIZES} from './constants'


const Typography = styled.div`
  color: ${props => props.textColor};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => SIZES[props.size].default};
  font-family: ${props => props.fontFamily ? props.fontFamily : null};
  
  ${props => {
    return `@media ${props.theme.media.xl}{
      font-size: ${SIZES[props.size].md}
    }`
  }}
  ${props => {
    return `@media ${props.theme.media.sm}{
      font-size: ${SIZES[props.size].sm}
    }`
  }}
`

Typography.defaultProps = {
  textColor: `${props => props.theme.colors.black}`,
  size: '2',
  lineHeight: '1.2',
  fontWeight: '400',
}

export {Typography}
