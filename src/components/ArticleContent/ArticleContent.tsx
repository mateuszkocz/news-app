import React from 'react'
import ArticleMeta from '../ArticleMeta/ArticleMeta'

interface Source {
  id: string | null
  name: string
  url: string
}

// TODO: Some values might be null.
interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

interface Props {
  article: Article
}

function ArticleContent({article}: Props) {
  const {source} = article
  return (
    <section>
      <img src={article.urlToImage} alt=""/>
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
