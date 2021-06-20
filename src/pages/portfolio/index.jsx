import * as Styles from '../../styles/portfolioPageStyles'
import Seo from '../../components/Seo'
import Layout from '../../layout'
import PortfolioFormSection from '../../sections/portfolioPageSections/portfolioFormSection'


const PortfolioPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Styles.PortfolioPageContainer>
          <PortfolioFormSection />
        </Styles.PortfolioPageContainer>
      </Layout>
    </>
  )
}

export default PortfolioPage
