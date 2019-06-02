import React, { useContext } from 'react'
import ArticlesList from '../components/ArticlesList'
import Filters from '../components/Filters'
import Header from '../components/Header/Header'
import Page from '../components/Page'
import { ArticlesContext } from '../state/ArticlesProvider'

function Index() {
  const {ids, articles, fetching, error, setTopicFilter, setSort} = useContext(ArticlesContext)
  const articlesList = ids.map(id => articles[id])
  return (
    <Page>
      <Header>Articles</Header>
      <Filters/>
      <hr/>
      <button onClick={() => setTopicFilter('sports')}>sports</button>
      <button onClick={() => setTopicFilter('tech')}>tech</button>
      <button onClick={() => setTopicFilter('politics')}>politics</button>
      <button onClick={() => setTopicFilter('travel')}>travel</button>
      <hr/>
      <button onClick={() => setSort('popularity')}>popularity</button>
      <button onClick={() => setSort('publishedAt')}>publishedAt</button>
      <hr/>
      {
        fetching && <p>Loading articles…</p>
      }
      {
        error && <p>Something broke</p>
      }
      {
        !fetching && !error && <ArticlesList articles={articlesList}/>
      }
    </Page>
  )
}

export default Index
