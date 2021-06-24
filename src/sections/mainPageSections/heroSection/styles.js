import styled from 'styled-components'

import {mainColors} from '../../../constants/theme'


export const HeroSection = styled.div`
  padding: 60px 0;
  background-color: ${mainColors.darkBG};
  > * {
    display: flex;
    column-gap: 60px;
    align-items: center;
  }
`

export const IntroText = styled.div`
  max-width: 52%;
  > * + * {
    margin-top: 42px;
  }
`

export const Buttons = styled.div`
  > * + * {
    margin-left: 24px;
  }
`

export const HeroImage = styled.div`
  flex-grow: 1;
  > img {
    //max-width: unset;
  }
`
