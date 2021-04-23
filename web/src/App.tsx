import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './assets/global'

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
