import styled from 'styled-components'

import {mainColors} from '../../../constants/theme'


export const ReviewsSection = styled.div`
  background-color: ${mainColors.lightBG};
  padding: 120px 0;

  > * {
    padding: 0;
    position: relative;
  }
`

export const ReviewCard = styled.div`
  box-sizing: border-box;
  max-width: 320px;
  padding: 24px 30px;
  background: #FFFFFF;
  border-radius: 22px;
`

export const ReviewHeader = styled.div`
  display: flex;
  align-items: stretch;
  padding-bottom: 20px;
  justify-content: space-between;
  border-bottom: 2px solid #F4F4F4;
`

export const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px 0;
`

export const ReviewContent = styled.div`
  padding-top: 30px;
`

export const Slider = styled.div`
  cursor: grab;
  padding-top: 60px;
  width: 100vw;
  background-image: url('/line.svg');
  background-position: center;
  background-repeat: repeat-x;
  background-size: contain;
  > * {
    > * {
      > * {
        width: 320px !important;
      }
    }
  }
`

export const SliderButtons = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  display: flex;
  > * + * {
    margin-left: 28px;
  }
`
