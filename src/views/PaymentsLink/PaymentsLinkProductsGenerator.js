import * as React from "react"

const { useState, useEffect } = React

const FIELDS = [{ label: "name" }, { label: "quantity" }, { label: "amount" }]

const PaymentsLinkProductsGenerator = ({ onChange }) => {
  const [products, setProducts] = useState([{}])
  const [alert, setAlert] = useState("")

  useEffect(() => {
    onChange(products)
  }, [products])

  function handleOnChange({ name, value }, index) {
    FIELDS.forEach((field) => {
      if (value) {
        if (name.includes(field.label)) {
          setProducts((prev) => {
            prev[index][field.label] = value
            return [...prev]
          })
        }
      } else {
        setAlert(`Ha ocurrido un error en el field ${field.label}`)
      }
    })
  }

  function addProduct() {
    setProducts([...products, {}])
  }

  function removeProduct(index) {
    setProducts(products.filter((p, i) => i !== index))
  }

  return (
    <div>
      {alert && <div>{alert}</div>}
      {products.map((product, index) => (
        <div key={index}>
          <input
            type="text"
            name={`products[${index}][name]`}
            onChange={({ target }) => handleOnChange(target, index)}
          />
          <input
            type="number"
            name={`products[${index}][quantity]`}
            onChange={({ target }) => handleOnChange(target, index)}
          />
          <input
            id={`products_${index}_amount`}
            type="number"
            name={`products[${index}][amount]`}
            onChange={({ target }) => handleOnChange(target, index)}
          />
          <button
            type="button"
            data-testid="removeProduct"
            onClick={() => removeProduct(index)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" data-testid="addProduct" onClick={addProduct}>
        Agregar otro producto
      </button>
    </div>
  )
}

export default PaymentsLinkProductsGenerator
