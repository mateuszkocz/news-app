import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Article from './pages/Article'
import Index from './pages/Index'

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Index}/>
      <Route path="/articles/:articleId/" component={Article}/>
    </Router>
  )
}

export default Routes
