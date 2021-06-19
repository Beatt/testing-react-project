import * as React from "react"
// eslint-disable-next-line node/no-unpublished-import
import { mount } from "enzyme"
import { I18nextProvider } from "react-i18next"
import Home from "../../views/Home"
import i18next from "../../config/i18next"

describe("Example", function () {
  it("example tests", () => {
    const wrapper = mount(
      <I18nextProvider i18n={i18next}>
        <Home some="" algo="" patsh="" esto="" />
      </I18nextProvider>
    )
  })
})
