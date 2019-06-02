import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import Article from './pages/Article'

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Index}/>
      <Route path="/articles/:articleId/" component={Article}/>
    </Router>
  )
}

export default Routes
