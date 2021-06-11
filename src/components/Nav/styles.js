import styled from 'styled-components'


export const Navigation = styled.nav`
  padding: 30px 0;
  background-color: ${props => props.theme.colors.darkBG};
  > * {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
`

export const Logo = styled.div`
  cursor: pointer;
`

export const Menu = styled.div`

`
