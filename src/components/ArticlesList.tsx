import React from 'react'
import styled from 'styled-components'
import { Article } from '../types'
import ArticlePreview from './ArticlePreview'

const ArticlesListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`

interface Props {
  articles: Article[]
}

function ArticlesList({articles = []}: Props) {
  return (
    <ArticlesListContainer>
      {
        !articles.length && <p>Nothing found.</p>
      }
      {
        articles.length && articles.map(article => (
          <ArticlePreview article={article} key={article.url}/>
        ))
      }
    </ArticlesListContainer>
  )
}

export default ArticlesList
