import React from 'react'
import { Article } from '../../types'
import ArticleMeta from '../ArticleMeta/ArticleMeta'
import Image from '../Image'

interface Props {
  article: Article
}

function ArticleContent({article}: Props) {
  const {source} = article
  return (
    <section>
      <Image src={article.urlToImage} alt=""/>
      <ArticleMeta
        author={article.author}
        date={article.publishedAt}
        sourceName={source.name}
        sourceUrl={source.url}
      />
      {/* TODO: Assuming this should be a title. Design is not clear. */}
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <a href={article.url}>Go To Source</a>
    </section>
  )
}

export default ArticleContent
