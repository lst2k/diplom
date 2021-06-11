import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import MainPage from '../pages/main'
import ServicesPage from '../pages/services'
import PortfolioPage from '../pages/portfolio'
import ContactPage from '../pages/contact'


const SiteRouter = () => {
  return (
    <Router>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/services" exact>
        <ServicesPage />
      </Route>
      <Route path="/portfolio" exact>
        <PortfolioPage />
      </Route>
      <Route path="/contacts" exact>
        <ContactPage />
      </Route>
    </Router>
  )
}

export default SiteRouter
