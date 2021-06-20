import Link from 'next/link'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'

import {mainColors} from '../../../constants/theme'


const HeroSection = () => {
  return (
    <Styles.HeroSection>
      <BaseContainer>
        <Styles.IntroText>
          <Typography fontWeight={'700'} size={5} variant={'h1'} textColor={'#fff'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sedfd
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

        <div>

        </div>
      </BaseContainer>
    </Styles.HeroSection>
  )
}

export default HeroSection
