import { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export const LanguageContext = createContext(undefined)

export const LanguageContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation()
  const languages = {
    'en-US': { nativeName: t('LanguageSelector:english') },
    'es-MX': { nativeName: t('LanguageSelector:spanish') },
    'it-IT': { nativeName: t('LanguageSelector:italian') },
  }

  const onClickLanguageChange = (e) => {
    const language = e.target.value
    i18n.changeLanguage(language)
    localStorage.setItem('i18n-lang', language)
  }

  return (
    <LanguageContext.Provider value={{ t, i18n, onClickLanguageChange, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageContextProvider.propTypes = {
  children: PropTypes.node
}

export const useLanguageContext = () => useContext(LanguageContext)
