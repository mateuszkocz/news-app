import React, { useContext } from 'react'
import { RouteChildrenProps } from 'react-router'
import ArticleContent from '../components/ArticleContent/ArticleContent'
import Header from '../components/Header/Header'
import LinkToArticles from '../components/LinkToArticles'
import { ArticlesContext } from '../state/ArticlesProvider'

function Article({match}: RouteChildrenProps<{articleId: string}>) {
  const {articles} = useContext(ArticlesContext)
  if (!match) {
    return <p>Something went wrong.</p>
  }
  const article = articles[match.params.articleId]
  return (
    <div>
      <Header>{article.title}</Header>
      <LinkToArticles/>
      <ArticleContent article={article}/>
    </div>
  )
}

export default Article
