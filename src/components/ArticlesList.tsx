import React from 'react'
import ArticleContent from './ArticleContent'

function ArticlesList() {
  return (
    <div>
      {
        [1, 2, 3].map(item => (
          <ArticleContent/>
        ))
      }
    </div>
  )
}

export default ArticlesList
