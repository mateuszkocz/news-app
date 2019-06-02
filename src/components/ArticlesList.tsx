import React from 'react'
import { Article } from '../types'
import ArticlePreview from './ArticlePreview'

interface Props {
  articles: Article[]
}

function ArticlesList({articles = []}: Props) {
  return (
    <div>
      {
        !articles.length && <p>Nothing found.</p>
      }
      {
        articles.length && articles.map(article => (
          <ArticlePreview article={article} key={article.url}/>
        ))
      }
    </div>
  )
}

export default ArticlesList
