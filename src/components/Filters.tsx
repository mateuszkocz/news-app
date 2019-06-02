import React, { useContext } from 'react'
import { ArticlesContext } from '../state/ArticlesProvider'

function Filters() {
  const {setTopicFilter, setSort} = useContext(ArticlesContext)
  return (
    <div>
      <hr/>
      <button onClick={() => setTopicFilter('sports')}>sports</button>
      <button onClick={() => setTopicFilter('tech')}>tech</button>
      <button onClick={() => setTopicFilter('politics')}>politics</button>
      <button onClick={() => setTopicFilter('travel')}>travel</button>
      <hr/>
      <button onClick={() => setSort('popularity')}>popularity</button>
      <button onClick={() => setSort('publishedAt')}>publishedAt</button>
      <hr/>
    </div>
  )
}

export default Filters
