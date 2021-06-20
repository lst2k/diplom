import styled from 'styled-components'

import {mainColors} from '../../constants/theme'


export const Navigation = styled.nav`
  padding: 30px 0;
  background-color: ${mainColors.darkBG};
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

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 36px;
  margin-left: auto;
  > * + * {
    margin-left: 30px;
  }
`
