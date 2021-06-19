import Seo from '../components/Seo'

import * as Styles from '../styles/homePageStyles'
import HeroSection from '../sections/mainPageSections/heroSection'
import Layout from '../layout'
import AdvantagesSection from '../sections/mainPageSections/advantagesSection'
import LastWorksSection from '../sections/mainPageSections/lastWorksSection'


export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Styles.HomePageContainer>
          <HeroSection />
          <AdvantagesSection />
          <LastWorksSection />
        </Styles.HomePageContainer>
      </Layout>
    </>
  )
}
