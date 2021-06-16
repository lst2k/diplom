import styled from 'styled-components'


export const SvgIcon = styled.span`
  cursor: pointer;
  > * path {
    transition: all 0.15s;
    fill: ${props => props.theme.colors.basicTextColor};
  }
  :hover {
    > * path {
      fill: ${props => props.fill}
    }
  }
`