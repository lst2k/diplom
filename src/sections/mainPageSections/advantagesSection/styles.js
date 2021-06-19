import styled, {css} from 'styled-components'

import {mainColors} from '../../../constants/theme'
import Typography from '../../../components/Typography'


export const AdvantagesSection = styled.div`
  padding: 60px 0;
  background-color: ${mainColors.darkBG};

  > * {
    display: flex;
    justify-content: space-between;
  }
`

export const HeadingsContainer = styled.div`
  max-width: 268px;
  padding: 16px 12px 16px 20px;
  box-shadow: 0 0 45px 12px rgba(0, 0, 0, 0.25);
  background-color: ${mainColors.darkBG};
  border-radius: 8px;
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  ::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 5%;
    width: 3px;
    height: 90%;
    border-radius: 32px;
    background-color: #000;
  }
`

export const Heading = styled(Typography)`
  cursor: pointer;
  padding: 20px 26px;
  position: relative;
  ${props => props.active ? css`
    color: #fff;

    ::before {
      content: '';
      position: absolute;
      width: 5px;
      height: 100%;
      top: 0;
      left: 3px;
      border-radius: 32px;
      background-color: ${mainColors.primary};
    }
  ` : null};
`

export const Slide = styled.div`
  max-width: 740px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  column-gap: 40px;
  position: relative;
  
  > * {
    &:nth-child(1), &:nth-child(2) {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 40px;
      > button {
        margin-right: auto;
      }
    }
  }
`

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  display: flex;
  > * + * {
    margin-left: 28px;
  }
`

