import React from 'react'
import { Article } from '../types'

interface Props {
  article: Article
}

function ArticlePreview({article}: Props) {
  return (
    <div>
      {JSON.stringify(article)}
    </div>
  )
}

export default ArticlePreview
