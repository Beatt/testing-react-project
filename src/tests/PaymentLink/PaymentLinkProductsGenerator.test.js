import * as React from "react"
// eslint-disable-next-line node/no-unpublished-import
import { mount } from "enzyme"
import PaymentsLinkProductsGenerator from "../../views/PaymentsLink/PaymentsLinkProductsGenerator"
import PaymentLinkProductPage from "../objectPages/PaymentLinkProductPage"

describe("PaymentsLinkProductsGenerator", function () {
  // Definimos los props de nuestro componente
  // Creamos un mock para comprobar que los productos
  // se estén agregando correctamente
  let props
  beforeEach(() => {
    props = {
      onChange: jest.fn(),
    }
  })

  // Montamos nuestro componente con Enzyme
  let wrapper
  beforeEach(() => {
    wrapper = mount(<PaymentsLinkProductsGenerator onChange={props.onChange} />)
  })

  it("Alta de un producto con nombre, cantidad y precio unitario.", () => {

    // Buscamos el input name y asignamos el nombre del producto
    PaymentLinkProductPage.addProductName(wrapper, 0, "Producto A")

    // Buscamos el input quantity y asignamos la cantidad
    PaymentLinkProductPage.addProductQuantity(wrapper, 0, 1)

    // Buscamos el input amount y asignamos el precio unitario
    PaymentLinkProductPage.addProductAmount(wrapper, 0, 1000)

    // Comprobamos que el onChange tenga el producto
    // con los siguientes valores y estructura
    expect(props.onChange).toHaveBeenCalledWith([
      {
        name: "Producto A",
        quantity: "1",
        amount: "1000",
      },
    ])
  })

  it("Alta de más de un producto/servicio", () => {
    // Buscamos el input name y asignamos el nombre del producto
    PaymentLinkProductPage.addProductName(wrapper, 0, "Producto A")

    // Buscamos el input quantity y asignamos la cantidad
    PaymentLinkProductPage.addProductQuantity(wrapper, 0, 1)

    // Buscamos el input amount y asignamos el precio unitario
    PaymentLinkProductPage.addProductAmount(wrapper, 0, 1000)

    // Hacemos clic para agregar un nuevo producto
    PaymentLinkProductPage.addNewProduct(wrapper)

    // Buscamos el nuevo input name y asignamos el nombre del producto
    PaymentLinkProductPage.addProductName(wrapper, 1, "Producto B")

    // Buscamos el nuevo input quantity y asignamos la cantidad
    PaymentLinkProductPage.addProductQuantity(wrapper, 1, 2)

    // Buscamos el nuevo input amount y asignamos el precio unitario
    PaymentLinkProductPage.addProductAmount(wrapper, 1, 2000)

    // Comprobamos que el onChange tenga los productos
    // con los siguientes valores y estructura
    expect(props.onChange).toHaveBeenCalledWith([
      {
        name: "Producto A",
        quantity: "1",
        amount: "1000",
      },
      {
        name: "Producto B",
        quantity: "2",
        amount: "2000",
      },
    ])
  })

  it("Eliminar un producto", () => {
    // Agregamos un producto
    PaymentLinkProductPage.addRandomProduct(wrapper)

    // Hacemos clic en el botón de eliminar
    PaymentLinkProductPage.removeProduct(wrapper)

    // Comprobamos que se haya eliminado un producto
    expect(props.onChange).toHaveBeenCalledWith([])
  })

  it("Mostrar un error cuando un campo venga vacío", () => {
    // Buscamos el input name y asignamos el nombre del producto
    PaymentLinkProductPage.addProductName(wrapper, 0, "Producto A")

    // Buscamos el input quantity y asignamos la cantidad
    PaymentLinkProductPage.addProductQuantity(wrapper, 0, 1)

    // Buscamos el input amount y asignamos un valor vació
    PaymentLinkProductPage.addProductAmount(wrapper, 0, "")

    // Comprobamos que el mensaje de error se muestre en pantalla
    expect(
      wrapper.text().includes("Ha ocurrido un error en el field amount")
    ).toBeTruthy()
  })
})
