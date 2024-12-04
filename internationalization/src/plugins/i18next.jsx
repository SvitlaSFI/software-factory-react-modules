import i18Next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations, defaultLocale } from '../locales'

function initI18Next() {
  i18Next.use(initReactI18next)
    .init({
      resources: translations,
      lng: defaultLocale,
      fallbackNS: 'HomePage'
    })
}

export default initI18Next
