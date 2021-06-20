import {useState} from 'react'

import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'

import LinkedIn from '../../../images/clients/linkedIn.svg'
import Instagram from '../../../images/social-icons/instagram.svg'
import Telegram from '../../../images/social-icons/telegram.svg'
import SvgIcon from '../../../components/SvgIcon'


const AdvantagesSection = () => {
  const [activeSlides, setActiveSlides] = useState({
    0: true,
    1: false,
    2: false,
    3: false
  })

  const setActivityState = (keyName) => {
    let newActives = {}
    Object.keys(activeSlides).forEach(key => {
      newActives = {...newActives, [key]: key === keyName}
    })
    return newActives
  }

  const handleClick = (key) => {
    setActiveSlides(setActivityState(key))
  }


  return (
    <Styles.AdvantagesSection>
      <BaseContainer>
        <Styles.HeadingsContainer>
          <Styles.Heading size={3} active={activeSlides['0']} onClick={() => handleClick('0')}>О нас</Styles.Heading>
          <Styles.Heading size={3} active={activeSlides['1']} onClick={() => handleClick('1')}>Процесс работы</Styles.Heading>
          <Styles.Heading size={3} active={activeSlides['2']} onClick={() => handleClick('2')}>Наши клиенты</Styles.Heading>
          <Styles.Heading size={3} active={activeSlides['3']} onClick={() => handleClick('3')}>Контакты</Styles.Heading>
        </Styles.HeadingsContainer>


        <Styles.Slider>
          <Styles.SlideAboutUs active={activeSlides['0']}>
              <Typography variant={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>
                Талантливая и профессиональная команда
              </Typography>
            <div>
              <Typography>
                Сильная команда – залог максимально эффективных решений к вашим задачам.
                Каждый новый проект для нас – своеобразный вызов, который подразумевает нахождение уникального решения.
              </Typography>
              <Typography>
                Многолетний опыт работы в сфере коммуникационного, веб- и графдизайна не только оттачивают наши навыки,
                он позволяет давать клиенту готовые решения, которые будут работать эффективно.
              </Typography>
            </div>
          </Styles.SlideAboutUs>

          <Styles.SlideWorkProcess active={activeSlides['1']}>
              <Typography variant={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>
                Процесс реализации проектов
              </Typography>
            <Styles.WorkSteps>
              <Styles.WorkStep>
                <div>
                  <Styles.Circle><Typography size={3} textColor={'#fff'} fontWeight={'700'}>1</Typography></Styles.Circle>
                  <Styles.Line />
                </div>
                <Typography variant={'p'} textColor={'#fff'}>
                  Техническое задание
                </Typography>
                <Typography>
                  Заполнение брифинга, дополнительные вопросы.
                </Typography>
              </Styles.WorkStep>
              <Styles.WorkStep>
                <div>
                  <Styles.Circle><Typography size={3} textColor={'#fff'} fontWeight={'700'}>2</Typography></Styles.Circle>
                  <Styles.Line />
                </div>
                <Typography variant={'p'} textColor={'#fff'}>
                  Разработка<br /> концептуальных вариантов
                </Typography>
                <Typography>
                  Мы формируем идеи и приступаем к их воплощению - разрабатываем концептуальные варианты.
                </Typography>
              </Styles.WorkStep>
              <Styles.WorkStep>
                <Styles.Circle><Typography size={3} textColor={'#fff'} fontWeight={'700'}>3</Typography></Styles.Circle>
                <Typography variant={'p'} textColor={'#fff'}>
                  Оформление проекта
                </Typography>
                <Typography>
                  Формирование выходных документов, подготовка рабочих файлов и передача их клиенту.
                </Typography>
              </Styles.WorkStep>
            </Styles.WorkSteps>
          </Styles.SlideWorkProcess>

          <Styles.SlideClients active={activeSlides['2']}>
              <Typography variant={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>
                Наши клиенты
              </Typography>
            <Styles.ClientsLogos>
              {Array.from(Array(12).keys()).map((item, index) => <LinkedIn key={index} />)}
            </Styles.ClientsLogos>
          </Styles.SlideClients>

          <Styles.SlideContactUs active={activeSlides['3']}>
              <Typography variant={'h3'} size={4} textColor={'#fff'} fontWeight={'700'}>
                Вы можете написать нам по любому вопросу
              </Typography>

            <Styles.Contacts>
              <div>
                <Typography variant={'p'}>
                  Почта
                </Typography>
                <Typography variant={'p'} textColor={'#fff'}>
                  <a href={'mailto: pochta@gmail.com'}>pochta@gmail.com</a>
                </Typography>
              </div>
              <div>
                <Typography variant={'p'}>
                  Соц. сети
                </Typography>
                <div>
                  <SvgIcon fill={'#DF3939'} defaultFill={'#fff'}>
                    <Instagram />
                  </SvgIcon>
                  <Typography fontWeight={'600'} size={1}>instagram</Typography>
                </div>
                <div>
                  <SvgIcon fill={'#00C2FF'} defaultFill={'#fff'}>
                    <Telegram />
                  </SvgIcon>
                  <Typography fontWeight={'600'} size={1}>telegram</Typography>
                </div>
              </div>
            </Styles.Contacts>

          </Styles.SlideContactUs>
        </Styles.Slider>

      </BaseContainer>
    </Styles.AdvantagesSection>
  )
}

export default AdvantagesSection
