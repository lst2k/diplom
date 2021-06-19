import styled from 'styled-components'

import {mainColors} from '../../../constants/theme'


export const LastWorksSection = styled.div`
  padding: 60px 0;
  background-color: ${mainColors.darkBG};

  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const InfoSection = styled.div`
  max-width: 260px;

  > * + * {
    margin-top: 40px;
  }
`

export const WorksContainer = styled.div`
  display: flex;
  cursor: pointer;
  > * {
    opacity: 0.6;
    transition: all 0.2s;
    transform: scale(0.8);
    :hover {
      transform: scale(1);
      opacity: 1;
    }
  }
`
