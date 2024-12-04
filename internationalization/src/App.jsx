import { useLanguageContext } from './contexts/languageContext'
import './App.css'

function App() {
  const { t } = useLanguageContext()

  return (
    <>
      <h1>{t("HomePage:welcomeMessage")}</h1>
      <h2>{t("HomePage:dynamicValueMessage", { customKey: 10 })}</h2>
    </>
  )
}

export default App
