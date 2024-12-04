import { useState } from 'react'
import { useLanguageContext } from '../contexts/languageContext'

const LanguageSelector = () => {
  const { languages, onClickLanguageChange, i18n } = useLanguageContext()
  const [ selectedValue, setSelectedValue ] = useState(i18n.language)

  const handleChange = (event) => {
    onClickLanguageChange(event)
    setSelectedValue(event.target.value)
  }

  return (
    <select
      style={{
        width: 200,
        position: "absolute",
        top: 10,
        left: 10,
        height: "40px",
      }}
      value={selectedValue}
      onChange={handleChange}
    >
      {Object.keys(languages).map((lng) => (
        <option key={languages[lng].nativeName} value={lng}>
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector