import React from 'react'
import { Provider } from 'react-redux'

import Routes from './routers/Routes'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
