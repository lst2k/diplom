import {useState} from 'react'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import {setActivityState} from '../../../utils/objectLoop'
import Typography from '../../../components/Typography'
import {works} from './constants'


const PortfolioFormSection = () => {

  //const [allWorks, setAllWorks] = useState(works)
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


  return (
    <Styles.PortfolioFormSection>
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
            <Styles.Work key={index} category={work.category}>
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
