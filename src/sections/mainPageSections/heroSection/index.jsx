import Link from 'next/link'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'

import {mainColors} from '../../../constants/theme'

import heroImage from '../../../images/hero-image.jpg'


const HeroSection = () => {
  return (
    <Styles.HeroSection>
      <BaseContainer>
        <Styles.IntroText>
          <Typography fontWeight={'700'} size={5} variant={'h1'} textColor={'#fff'}>
            Профессиональная работа с графикой - векторные и растровые макеты
          </Typography>

          <Typography variant={'p'}>
            Графический дизайн для вашей компании или продукта,
            поможет выгодно отстроиться от конкурентов, завоевать доверие клиентов и партнеров.
          </Typography>

          <Styles.Buttons>
            <Button>Подробнее</Button>
            <Link href={'/portfolio'}>
              <a>
                <Button type={'empty'} borderColor={mainColors.primary}>Портфолио</Button>
              </a>
            </Link>
          </Styles.Buttons>
        </Styles.IntroText>

        <Styles.HeroImage>
          <img src={heroImage} alt={''} />
        </Styles.HeroImage>
      </BaseContainer>
    </Styles.HeroSection>
  )
}

export default HeroSection
