class PaymentLinkProductPage {
  static addProductName(wrapper, index, value) {
    const name = wrapper.find(`input[name="products[${index}][name]"]`).at(0)
    name.instance().value = value
    name.simulate("change")
  }

  static addProductQuantity(wrapper, index, value) {
    const quantity = wrapper.find(`input[name="products[${index}][quantity]"]`)
    quantity.at(0).instance().value = value
    quantity.simulate("change")
  }

  static addProductAmount(wrapper, index, value) {
    const amount = wrapper.find(`input[name="products[${index}][amount]"]`)
    amount.at(0).instance().value = value
    amount.simulate("change")
  }

  static addNewProduct(wrapper) {
    wrapper.find('[data-testid="addProduct"]').at(0).simulate("click")
  }

  static removeProduct(wrapper) {
    wrapper.find("[data-testid='removeProduct']").at(0).simulate("click")
  }

  static addRandomProduct(wrapper, index = 0) {
    this.addProductName(wrapper, index, "Random")
    this.addProductQuantity(wrapper, index, 1)
    this.addProductAmount(wrapper, index, 500)
  }
}

export default PaymentLinkProductPage
