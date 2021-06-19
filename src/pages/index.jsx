import Seo from '../components/Seo'

import * as Styles from '../styles/homePageStyles'
import HeroSection from '../sections/mainPageSections/heroSection'
import Layout from '../layout'
import AdvantagesSection from '../sections/mainPageSections/advantagesSection'
import LastWorksSection from '../sections/mainPageSections/lastWorksSection'
import ReviewsSection from '../sections/mainPageSections/reviewsSection'


export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Styles.HomePageContainer>
          <HeroSection />
          <AdvantagesSection />
          <LastWorksSection />
          <ReviewsSection />
        </Styles.HomePageContainer>
      </Layout>
    </>
  )
}
