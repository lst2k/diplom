import styled from 'styled-components'


export const BaseContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  @media ${props => props.theme.media.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
