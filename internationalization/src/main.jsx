import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import initI18Next from './plugins/i18next.jsx'
import { LanguageContextProvider } from './contexts/languageContext.jsx'
import LanguageSelector from './components/LanguageSelector.jsx'
import './index.css'

initI18Next()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <LanguageSelector />
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
)
