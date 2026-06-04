import { useState } from 'react'

export default function Compras({ compra, setCompra }) {
  const [nuevo, setNuevo] = useState('')

  const añadir = () => {
    const item = nuevo.trim().toLowerCase()
    if (item && !compra.includes(item)) setCompra((prev) => [...prev, item])
    setNuevo('')
  }

  const quitar = (item) => setCompra((prev) => prev.filter((x) => x !== item))
  const vaciar = () => setCompra([])

  return (
    <section>
      <h2 className="titulo-seccion">Mi lista de compras</h2>

      <div className="add-row">
        <input
          value={nuevo}
          onChange={(e) => setNuevo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && añadir()}
          placeholder="Añadir ingrediente..."
        />
        <button className="btn-principal" onClick={añadir}>+</button>
      </div>

      {compra.length === 0 ? (
        <p className="vacio">Tu lista está vacía. Cocina una receta y añade lo que necesites.</p>
      ) : (
        <>
          <ul className="lista-compra">
            {compra.map((item) => (
              <li key={item}>
                <span>{item}</span>
                <button className="quitar" onClick={() => quitar(item)} aria-label="Quitar">✕</button>
              </li>
            ))}
          </ul>
          <button className="btn-secundario" onClick={vaciar}>Vaciar lista</button>
        </>
      )}
    </section>
  )
}
