import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'

import {mainColors} from '../../../constants/theme'

import Arrow from '../../../images/arrow.svg'


const AdvantagesSection = () => {
  return (
    <Styles.AdvantagesSection>
      <BaseContainer>
        <Styles.HeadingsContainer>
          <Styles.Heading active size={3}>Заголовок</Styles.Heading>
          <Styles.Heading size={3}>Заголовок</Styles.Heading>
          <Styles.Heading size={3}>Заголовок</Styles.Heading>
          <Styles.Heading size={3}>Заголовок</Styles.Heading>
        </Styles.HeadingsContainer>

        <Styles.Slide>
          <div>
            <Typography variant={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>Lorem ipsum dolor sit amet</Typography>
            <Button>Подробнее</Button>
          </div>
          <div>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
          </div>

          <Styles.SliderButtons>
            <Button type={'arrow'} rotate={'180'}><Arrow /></Button>
            <Button type={'arrow'}><Arrow /></Button>
          </Styles.SliderButtons>

        </Styles.Slide>
      </BaseContainer>
    </Styles.AdvantagesSection>
  )
}

export default AdvantagesSection
