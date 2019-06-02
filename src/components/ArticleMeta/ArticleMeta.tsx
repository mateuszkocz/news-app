import React from 'react'

interface Props {
  author?: string
  date?: string
  sourceName?: string
  sourceUrl?: string
}

const dateToDisplay =
  (isoDate: string) =>
    new Date(isoDate).toLocaleDateString('en', {month: 'short', day: 'numeric', year: 'numeric'})

function ArticleMeta({author, date, sourceName, sourceUrl}: Props) {
  return (
    <aside>
      {date && <span>{dateToDisplay(date)}</span>}
      {author && <span>{author}</span>}
      {sourceUrl && sourceName && <a href={sourceUrl}>{sourceName}</a>}
    </aside>
  )
}

export default ArticleMeta
