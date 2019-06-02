import React from 'react'
import ArticleContent from '../components/ArticleContent'
import Header from '../components/Header'
import LinkToArticles from '../components/LinkToArticles'

function Article() {
  return (
    <div>
      <Header/>
      <LinkToArticles/>
      <ArticleContent/>
    </div>
  )
}

export default Article
