import React from 'react'

import * as Styles from './styles'
import Layout from '../../layout'
import HeroSection from '../../sections/mainPageSections/heroSection'


const MainPage = () => {
  return (
    <Layout>
      <Styles.MainPageContainer>
        <HeroSection />
      </Styles.MainPageContainer>
    </Layout>
  )
}

export default MainPage
