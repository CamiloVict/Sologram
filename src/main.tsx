import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Context/Context'


import { store } from './store/indexStore'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  </React.StrictMode>
)
