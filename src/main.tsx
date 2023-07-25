import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.ts'
import  { DarkModeContextProvider } from './contexts/Theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
      <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
