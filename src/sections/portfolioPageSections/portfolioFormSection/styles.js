import styled, {css} from 'styled-components'

import {mainColors} from '../../../constants/theme'


export const PortfolioFormSection = styled.div`
  background-color: ${mainColors.darkBG};
  padding: 40px 0;
  height: 80vh;
  position: relative;

  > * {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 30px;
  }
`

export const FiltersContainer = styled.div`
  background-color: #1F1F24;
  border-radius: 9px;
  max-width: 264px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  > div {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
`

const Option = css`
  transition: all 0.15s;
  background-color: ${props => props.selected ? mainColors.primary : '#171717'};
  color: ${props => props.selected ? '#fff' : '#8D8D8D'};
  border-radius: 30px;
  padding: 8px 12px;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
`

export const MainFilterOption = styled.span`
  ${Option};
  padding: 14px 16px;
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
`

export const FilterOption = styled.span`
  ${Option};
`

export const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-row-gap: 30px;
  grid-column-gap: 20px;
`

export const Work = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  height: 170px;

  > * {
    transition: 0.15s;

    :nth-child(2), :nth-child(3) {
      position: absolute;
      left: 12px;
      opacity: 0;
      z-index: 1;
    }

    :nth-child(2) {
      top: 10px;
    }

    :nth-child(3) {
      bottom: 10px;
    }
  }

  > img {
    display: block;
    transition: transform .15s;
  }

  :hover {
    > * {
      :nth-child(2), :nth-child(3) {
        opacity: 1;
      }
    }

    img {
      transform: scale(1.1);
    }

    ::after {
      transition: 0.15s;
      background-size: 100% 100%;
    }
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.44%, #000000 100%);
    background-size: 200% 200%;
  }
`

export const OpenButton = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 6px 10px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  transition: background 0.1s;

  :hover {
    background: rgba(0, 0, 0, 0.6);
  }
`


// WORK DETAILS

export const WorkDetails = styled.div`
  position: fixed;
  top: 80px;
  bottom: 80px;
  max-width: 1170px;
  max-height: 100%;
  z-index: 10;
  display: ${props => props.open ? 'flex' : 'none'};
  overflow-y: scroll;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  
  ::-webkit-scrollbar {
   display: none;
  }
`

export const ShowCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  justify-items: stretch;
  width: 100%;
  > * {
    :nth-child(1) {
      grid-column: 1/2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      align-items: stretch;
      > * {
        width: 100%;
        :nth-child(1) {
          grid-column: 1/3;
        }
      }
    }
    :nth-child(2) {
      background-color: ${mainColors.primary};
    }
  }
`

export const ClosePopupButton = styled.span`
  position: absolute;
  right: -26px;
  top: 60px;
  z-index: 11;
  display: flex;
  align-items: center;
  transform: rotate(90deg);
  column-gap: 10px;
  cursor: pointer;
`

export const ProjectName = styled.span`
  position: absolute;
  bottom: 100px;
  right: -50px;
  transform: rotate(90deg);
  z-index: 11;
`
