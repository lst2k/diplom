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

export const Logo = styled.span`
  cursor: pointer;
  line-height: 0;
`

export const Menu = styled.div`
  display: flex;
  margin-left: 60px;
  > * + * {
    margin-left: 40px;
  }
`

export const DropDownImg = styled.span`
  margin-left: 6px;
`

export const MenuItem = styled.div`
  transition: color 0.15s;
  color: ${props => props.active ? '#fff' : null};
  &:hover {
    color: #fff;
  }
  > * {
    display: flex;
    align-items: center;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 36px;
  margin-left: auto;
  > * + * {
    margin-left: 30px;
  }
`
