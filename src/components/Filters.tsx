import React, { useContext } from 'react'
import { ArticlesContext, Sort, Topic } from '../state/ArticlesProvider'

function Filters() {
  const {setTopicFilter, setSort, filters} = useContext(ArticlesContext)
  return (
    <div>
      <hr/>
      <button disabled={filters.topic === Topic.Sports} onClick={() => setTopicFilter(Topic.Sports)}>sports</button>
      <button disabled={filters.topic === Topic.Tech} onClick={() => setTopicFilter(Topic.Tech)}>tech</button>
      <button disabled={filters.topic === Topic.Politics} onClick={() => setTopicFilter(Topic.Politics)}>politics</button>
      <button disabled={filters.topic === Topic.Travel} onClick={() => setTopicFilter(Topic.Travel)}>travel</button>
      <hr/>
      <button disabled={filters.sort === Sort.Popularity} onClick={() => setSort(Sort.Popularity)}>popularity</button>
      <button disabled={filters.sort === Sort.PublishedAt} onClick={() => setSort(Sort.PublishedAt)}>publishedAt</button>
      <hr/>
    </div>
  )
}

export default Filters
