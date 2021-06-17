import Link from 'next/link'
import {useRouter} from 'next/router'

import * as Styles from './styles'
import BaseContainer from '../BaseContainer'
import Typography from '../Typography'

import SvgIcon from '../SvgIcon'
import Button from '../Button'

import Logo from '../../images/logo.svg'
import DropDownImg from '../../images/drop-down.svg'
import Instagram from '../../images/social-icons/instagram.svg'
import Telegram from '../../images/social-icons/telegram.svg'
import Email from '../../images/social-icons/email.svg'


const Nav = () => {
  const menuItems = [
    {
      url: '/',
      title: 'Главная страница'
    },
    {
      url: '/services',
      title: 'Наши услуги',
      dropDown: <SvgIcon><DropDownImg /></SvgIcon>
    },
    {
      url: '/portfolio',
      title: 'Портфолио'
    },
    {
      url: '/contacts',
      title: 'Контакты'
    }
  ]

  let router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <Styles.Navigation>
      <BaseContainer>
        <Styles.Logo onClick={handleClick}>
          <Logo />
        </Styles.Logo>

        <Styles.Menu>
          {menuItems.map((item, index) => (
            <Styles.MenuItem key={`${index}-${item.title}`} active={router.pathname === item.url}>
              <Link href={item.url}>
                <a>
                  <Typography>{item.title}</Typography>
                  {item.dropDown &&
                  <Styles.DropDownImg>{item.dropDown}</Styles.DropDownImg>
                  }
                </a>
              </Link>
            </Styles.MenuItem>
          ))}
        </Styles.Menu>


        <Styles.SocialMediaContainer>
          <SvgIcon fill={'#DF3939'}>
            <Instagram />
          </SvgIcon>

          <SvgIcon fill={'#00C2FF'}>
            <Telegram />
          </SvgIcon>

          <SvgIcon fill={'#FAC43A'}>
            <Email />
          </SvgIcon>
        </Styles.SocialMediaContainer>

        <Button type={'empty'}>Оставить заявку</Button>

      </BaseContainer>
    </Styles.Navigation>

  )
}

export default Nav
