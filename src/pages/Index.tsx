import React from 'react'
import ArticlesList from '../components/ArticlesList'
import Filters from '../components/Filters'
import Header from '../components/Header'
import Page from '../components/Page'

function Index() {
  return (
    <Page>
      <Header/>
      <Filters/>
      <ArticlesList/>
    </Page>
  )
}

export default Index
