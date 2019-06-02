import React, { useContext } from 'react'
import styled from 'styled-components'
import ArticlesList from '../components/ArticlesList'
import Filters from '../components/Filters'
import Header from '../components/Header/Header'
import Page from '../components/Page'
import { ArticlesContext } from '../state/ArticlesProvider'

const MoreButton = styled.button`
  margin: 2rem auto;
  display: block;
`

function Index() {
  const {ids, articles, fetching, error} = useContext(ArticlesContext)
  const articlesList = ids.map(id => articles[id])
  return (
    <Page>
      <Header>Articles</Header>
      <Filters/>
      {
        fetching && <p>Loading articles…</p>
      }
      {
        error && <p>Something broke</p>
      }
      {
        !fetching && !error && <ArticlesList articles={articlesList}/>
      }
      <MoreButton onClick={() => alert('Not yet implemented')}>Show more</MoreButton>
    </Page>
  )
}

export default Index
