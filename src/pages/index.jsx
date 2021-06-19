import Seo from '../components/Seo'

import * as Styles from '../styles/homePageStyles'
import HeroSection from '../sections/mainPageSections/heroSection'
import Layout from '../layout'
import AdvantagesSection from '../sections/mainPageSections/advantagesSection'


export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Styles.HomePageContainer>
          <HeroSection />
          <AdvantagesSection />
        </Styles.HomePageContainer>
      </Layout>
    </>
  )
}
