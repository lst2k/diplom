import {useState, useRef} from 'react'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import {setActivityState} from '../../../utils/objectLoop'
import Typography from '../../../components/Typography'
import {works} from './constants'
import useOutsideClick from '../../../hooks/clickOutside'

import CloseIcon from '../../../images/close.svg'


const WorkDetailsPopup = (props) => {
  const closeWorkDetails = useRef('')
  useOutsideClick(closeWorkDetails, () => props.setOpen(false))

  return (
    <Styles.WorkDetails open={props.open} ref={closeWorkDetails}>

      <Styles.ClosePopupButton onClick={() => props.setOpen(false)}>
        <CloseIcon />
        <Typography textColor={'#fff'} fontWeight={'600'}>Закрыть</Typography>
      </Styles.ClosePopupButton>

      <Styles.ProjectName>
        <Typography textColor={'#fff'} fontWeight={'600'}>Название проекта</Typography>
      </Styles.ProjectName>

      <Styles.ShowCase>
        <div>
          {props.imagesArray.map((image, index) => (
            <img key={index} src={image} alt={''} />
          ))}
        </div>
        <div />
      </Styles.ShowCase>
    </Styles.WorkDetails>
  )
}


const PortfolioFormSection = () => {

  const [portfolioImages, setPortfolioImages] = useState([])
  const [open, setOpen] = useState(false)

  const [filteredWorks, setFilteredWorks] = useState(works)

  const [selected, setSelected] = useState({
    all: true,
    polygraph: false,
    corporateIdentity: false,
    siteDesign: false,
    advertisement: false,
    graphicDesign: false,
    instagram: false,
  })

  const filterHandler = (keyName) => {
    setSelected(setActivityState(keyName, selected))
    if (keyName === 'all') {
      setFilteredWorks(works)
    } else {
      let filteredPortfolio = works.filter((work) => work.category === keyName)
      setFilteredWorks(filteredPortfolio)
    }
  }

  const openPortfolioWork = (images) => {
    setOpen(true)
    setPortfolioImages(images)
  }


  return (
    <Styles.PortfolioFormSection>
      <WorkDetailsPopup open={open} setOpen={setOpen} imagesArray={portfolioImages} />
      <BaseContainer>
        <Styles.FiltersContainer>
          <Styles.MainFilterOption selected={selected.all} onClick={() => filterHandler('all')}>Все работы</Styles.MainFilterOption>
          <div>
            <Styles.FilterOption selected={selected.polygraph} onClick={() => filterHandler('polygraph')}>Полиграфия</Styles.FilterOption>
            <Styles.FilterOption selected={selected.corporateIdentity} onClick={() => filterHandler('corporateIdentity')}>Фирменный
              стиль</Styles.FilterOption>
            <Styles.FilterOption selected={selected.siteDesign} onClick={() => filterHandler('siteDesign')}>Дизайн
              сайта</Styles.FilterOption>
            <Styles.FilterOption selected={selected.advertisement}
                                 onClick={() => filterHandler('advertisement')}>Реклама</Styles.FilterOption>
            <Styles.FilterOption selected={selected.graphicDesign} onClick={() => filterHandler('graphicDesign')}>Графический
              дизайн</Styles.FilterOption>
            <Styles.FilterOption selected={selected.instagram} onClick={() => filterHandler('instagram')}>Instagram</Styles.FilterOption>
          </div>
        </Styles.FiltersContainer>

        <Styles.WorksContainer>
          {filteredWorks.map((work, index) => (
            <Styles.Work key={index} onClick={() => openPortfolioWork(work.showCase)}>
              <img src={work.image} alt={''} />
              <Styles.OpenButton>Открыть</Styles.OpenButton>
              <Typography fontWeight={'700'} textColor={'#fff'}>{work.name}</Typography>
            </Styles.Work>
          ))}
        </Styles.WorksContainer>
      </BaseContainer>
    </Styles.PortfolioFormSection>
  )
}

export default PortfolioFormSection
