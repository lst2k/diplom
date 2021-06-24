import * as Styles from './styles'
import BaseContainer from '../../../components/BaseContainer'
import Typography from '../../../components/Typography'
import Button from '../../../components/Button'
import {mainColors} from '../../../constants/theme'
import SvgIcon from '../../../components/SvgIcon'

import girl from '../../../images/girl.png'
import Instagram from '../../../images/social-icons/instagram.svg'
import Telegram from '../../../images/social-icons/telegram.svg'
import Email from '../../../images/social-icons/email.svg'



const ContactSection = () => {
  return (
    <Styles.ContactSection>
      <BaseContainer>
        <Styles.InfoSection>
          <Typography size={4} fontWeight={'700'} textColor={mainColors.darkBG} variant={'h2'}>
            Узнайте стоимость разработки дизайна
          </Typography>
          <Typography variant={'p'}>
            Заполние форму и в течении суток мы вам ответим
          </Typography>
          <div>
            <Button>Оставить заявку</Button>
            <Styles.SocialMediaContainer>
              <SvgIcon fill={'#DF3939'} defaultFill={mainColors.darkBG}>
                <Instagram />
              </SvgIcon>

              <SvgIcon fill={'#00C2FF'} defaultFill={mainColors.darkBG}>
                <Telegram />
              </SvgIcon>

              <SvgIcon fill={'#FAC43A'} defaultFill={mainColors.darkBG}>
                <Email />
              </SvgIcon>
            </Styles.SocialMediaContainer>
          </div>
        </Styles.InfoSection>

        <Styles.Image>
          <img src={girl} alt={'girl-with-laptop'} />
        </Styles.Image>
      </BaseContainer>
    </Styles.ContactSection>
  )
}

export default ContactSection
