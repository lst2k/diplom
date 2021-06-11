import styled from 'styled-components'


export const SvgIcon = styled.span`
  cursor: pointer;
  > * path {
    transition: all 0.15s;
    fill: #fff;
  }
  :hover {
    > * path {
      fill: ${props => props.fill}
    }
  }
`
