import * as React from "react"
import { useTranslation } from "react-i18next"

const { useEffect } = React

const Home = () => {
  const { t } = useTranslation()

  useEffect(() => {
    ;(() => {
      console.log("here")
    })()
  }, [])

  return (
    <div>
      <h2>{t("example.home.title")}</h2>
    </div>
  )
}

export default Home
