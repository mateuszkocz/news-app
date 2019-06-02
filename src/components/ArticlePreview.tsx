import React from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../types'
import ArticleMeta from './ArticleMeta/ArticleMeta'
import Image from './Image'

interface Props {
  article: Article
}

function ArticlePreview({article}: Props) {
  return (
    <div>
      <Image src={article.urlToImage} alt=""/>
      <ArticleMeta
        author={article.author}
        date={article.publishedAt}
        sourceName={article.source.name}
        sourceUrl={article.source.url}
      />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={'/articles/' + article.$id}>Read More</Link>
    </div>
  )
}

export default ArticlePreview
