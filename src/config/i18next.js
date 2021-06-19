import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { es } from "../locales"

i18n.use(initReactI18next).init({
  debug: false,
  lng: "es",
  resources: {
    es: { translation: es.es },
  },
})

export default i18n
