import React from 'react'
import Routes from './Routes'
import ArticlesProvider from './state/ArticlesProvider'

const App: React.FC = () => {
  return (
    <ArticlesProvider>
      <Routes/>
    </ArticlesProvider>
  )
}

export default App
