import "./styles.css"
import { I18nextProvider } from "react-i18next"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import i18next from "../config/i18next"
import Home from "../views/Home"
import PaymentsLinkProductsGenerator from "../views/PaymentsLink/PaymentsLinkProductsGenerator";

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
            <PaymentsLinkProductsGenerator
              onChange={(products) => {
                console.log(products)
              }}
            />
          </Route>
        </Switch>
      </Router>
    </I18nextProvider>
  )
}

export default App
