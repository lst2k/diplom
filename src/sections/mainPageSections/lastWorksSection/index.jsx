import Link from 'next/link'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'

import work from '../../../images/works/work.png'


const LastWorksSection = () => {
  return (
    <Styles.LastWorksSection>
      <BaseContainer>
        <Styles.InfoSection>
          <Typography size={4} fontWeight={'700'} textColor={'#fff'} variant={'h2'}>Последние наши работы</Typography>
          <Typography variant={'p'}>
            А еще мы создаем дизайн и проектируем сайты, лендинги, промо-сайты и интернет-магазины.
          </Typography>

          <Link href={'/portfolio'}>
            <a><Button>Посмотреть все</Button></a>
          </Link>
        </Styles.InfoSection>

        <Styles.WorksContainer>
          <div>
            <img src={work} alt={'work'} />
          </div>
          <div>
            <img src={work} alt={'work'} />
          </div>
          <div>
            <img src={work} alt={'work'} />
          </div>
          <div>
            <img src={work} alt={'work'} />
          </div>
        </Styles.WorksContainer>
      </BaseContainer>
    </Styles.LastWorksSection>
  )
}

export default LastWorksSection
