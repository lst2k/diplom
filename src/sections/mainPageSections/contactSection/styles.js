import styled from 'styled-components'

import {mainColors} from '../../../constants/theme'


export const ContactSection = styled.div`
  padding-bottom: 120px;
  background-color: ${mainColors.lightBG};

  > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const InfoSection = styled.div`
  max-width: 362px;

  > * + * {
    margin-top: 40px;
  }

  > * {
    :last-child {
      display: flex;
    }
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 28px;

  > * + * {
    margin-left: 16px;
  }
`

export const Image = styled.div`
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 26%;
    width: 358px;
    height: 172px;
    background: linear-gradient(270deg, #5332AF 0%, #6E60EA 100%);
    border-radius: 27px;
    z-index: -1;
  } 
`
