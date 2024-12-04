import enUS from './en-US'
import esMX from './es-MX'
import itIT from './it-IT'

const translations = {
  'en-US': { ...enUS },
  'es-MX': { ...esMX },
  'it-IT': { ...itIT }
}

const defaultLocale = localStorage.getItem('i18n-lang') ?? 'en-US'

export { translations, defaultLocale }
