import React, { createContext, useEffect, useState } from 'react'
import { Article } from '../types'

interface ArticlesState {
  ids: string[]
  articles: Record<string, Article>
  error: Error | null
  fetching: boolean
}

interface ArticlesActions {
  setTopicFilter: (topicName: Topic) => unknown
  setDatesFilter: (dateName: Dates) => unknown
  setSort: (sortName: Sort) => unknown
}

type ArticlesProviderState = ArticlesState & ArticlesActions

type Topic = 'tech' | 'travel' | 'politics' | 'sports'
type Sort = 'popularity' | 'publishedAt'
type Dates = 'this month' | 'this week' | 'today'

interface Filters {
  topic?: Topic
  sort?: Sort
  dates?: Dates
}

interface Props {
  children: React.ReactNode
}

const initialState: ArticlesState = {
  ids: [],
  articles: {},
  error: null,
  fetching: false
}

const initialActions: ArticlesActions = {
  setTopicFilter: () => {
  },
  setDatesFilter: () => {
  },
  setSort: () => {
  },
}

const initialFilters: Filters = {
  topic: 'politics',
  sort: 'popularity',
  dates: 'this month'
}

export const ArticlesContext = createContext<ArticlesProviderState>({...initialState, ...initialActions})

const normalizeArticles = (articles: Article[]) =>
  articles.reduce<{ ids: string[], articles: Record<string, Article> }>((acc, article) => {
    acc.ids.push(article.url)
    acc.articles[article.url] = article
    return acc
  }, {
    ids: [],
    articles: {}
  })

const useNewsApi = ({topic, dates, sort}: Filters) => {
  const [state, setState] = useState<ArticlesState>(initialState)
  useEffect(() => {
    const query = new URLSearchParams({
      q: topic as string,
      sortBy: sort as string,
      apiKey: process.env.REACT_APP_NEWS_API_KEY as string
    })
    // Clear everything before making a request.
    // TODO: Reevaluate to make the "Load more" work.
    setState(internalState => ({...internalState, fetching: true, error: null, articles: {}, ids: []}))
    fetch(`https://newsapi.org/v2/everything?${query}`)
      .then(response =>
        response.json()
      )
      .then(({articles}) =>
        setState(internalState => ({...internalState, ...normalizeArticles(articles)}))
      )
      .catch(() =>
        setState(internalState => ({...internalState, error: new Error(`Couldn't fetch news.`)}))
      )
      .finally(() =>
        setState(internalState => ({...internalState, fetching: false}))
      )
  }, [topic, dates, sort])
  return state
}

const useArticlesProviderState = (): ArticlesProviderState => {
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const articlesState = useNewsApi(filters)
  const [state, setState] = useState<ArticlesProviderState>({...initialState, ...initialActions})

  useEffect(() => {
    setState({
      ...articlesState,
      setTopicFilter: (topic: Topic) => setFilters({...filters, topic}),
      setDatesFilter: (dates: Dates) => setFilters({...filters, dates}),
      setSort: (sort: Sort) => setFilters({...filters, sort})
    })
  }, [articlesState, filters])

  return state
}

function ArticlesProvider({children}: Props) {
  const state = useArticlesProviderState()
  return (
    <ArticlesContext.Provider value={state}>
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesProvider
