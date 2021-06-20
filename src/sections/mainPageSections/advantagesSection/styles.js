import styled, {css} from 'styled-components'

import {mainColors} from '../../../constants/theme'
import Typography from '../../../components/Typography'


export const AdvantagesSection = styled.div`
  padding: 120px 0;
  background-color: ${mainColors.darkBG};

  > * {
    display: flex;
    align-items: flex-start;
    column-gap: 80px;
  }
`

export const HeadingsContainer = styled.div`
  max-width: 268px;
  width: 100%;
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
    top: 8%;
    width: 3px;
    height: 84%;
    border-radius: 32px;
    background-color: #000;
  }
`

export const Heading = styled(Typography)`
  cursor: pointer;
  padding: 20px 26px;
  position: relative;
  transition: color 0.15s;
  &:hover {
    color: #fff;
  }
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

export const Slider = styled.div`
  flex-grow: 1;
`

const Slide = css`
  display: ${props => props.active ? 'flex' : 'none'};
  padding: 0 20px;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  row-gap: 30px;
`

export const SlideAboutUs = styled.div`
  ${Slide};
  > * {
    :nth-child(1) {
      max-width: 50%;
    }
    :nth-child(2) {
      display: flex;
      column-gap: 60px;
    }
  }
`

export const SlideWorkProcess = styled.div`
  ${Slide};
`

export const WorkSteps = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    max-width: 240px;
    width: 100%;
    position: relative;
  }
`

export const WorkStep = styled.div`
  position: relative;
  row-gap: 40px;
  > * {
    :nth-child(1) {
      margin-bottom: 40px;
    }
  }
`

export const Circle = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid ${mainColors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Line = styled.div`
  position: absolute;
  height: 2px;
  background-color: ${mainColors.primary};
  width: 88%;
  top: 23px;
  left: 46px;
`

export const SlideClients = styled.div`
  ${Slide};
`

export const ClientsLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 40px;
`

export const SlideContactUs = styled.div`
  ${Slide};
  > * {
    :nth-child(1) {
      max-width: 46%;
    }
  }
`

export const Contacts = styled.div`
  display: flex;
  column-gap: 60px;
  > * {
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      > * {
        :nth-child(1) {
          margin-right: 6px;
        }
      }
    }
  }
`
