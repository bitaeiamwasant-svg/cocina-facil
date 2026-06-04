import { useState } from 'react'
import { recetas } from './data/recetas.js'
import { useLocalStorage } from './lib/useLocalStorage.js'
import Buscar from './components/Buscar.jsx'
import Favoritas from './components/Favoritas.jsx'
import Compras from './components/Compras.jsx'
import RecetaDetalle from './components/RecetaDetalle.jsx'

const TABS = [
  { id: 'buscar', label: 'Buscar', icon: '🔍' },
  { id: 'favoritas', label: 'Favoritas', icon: '❤️' },
  { id: 'compras', label: 'Compras', icon: '🛒' }
]

export default function App() {
  const [tab, setTab] = useState('buscar')
  const [seleccionada, setSeleccionada] = useState(null) // receta abierta en detalle
  const [favoritas, setFavoritas] = useLocalStorage('cf:favoritas', [])
  const [compra, setCompra] = useLocalStorage('cf:compra', [])

  const esFavorita = (id) => favoritas.includes(id)
  const toggleFavorita = (id) =>
    setFavoritas((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const añadirACompra = (items) =>
    setCompra((prev) => [...new Set([...prev, ...items])])

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Cocina Fácil</h1>
          <p>Cocina con lo que ya tienes en casa 🍳</p>
        </div>
      </header>

      <main className="contenido">
        {tab === 'buscar' && (
          <Buscar
            recetas={recetas}
            onAbrir={setSeleccionada}
            esFavorita={esFavorita}
            toggleFavorita={toggleFavorita}
          />
        )}
        {tab === 'favoritas' && (
          <Favoritas
            recetas={recetas}
            favoritas={favoritas}
            onAbrir={setSeleccionada}
            toggleFavorita={toggleFavorita}
          />
        )}
        {tab === 'compras' && (
          <Compras compra={compra} setCompra={setCompra} />
        )}
      </main>

      <nav className="tabbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={tab === t.id ? 'tab activo' : 'tab'}
            onClick={() => setTab(t.id)}
          >
            <span className="tab-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>

      {seleccionada && (
        <RecetaDetalle
          receta={seleccionada}
          onCerrar={() => setSeleccionada(null)}
          esFavorita={esFavorita(seleccionada.id)}
          toggleFavorita={() => toggleFavorita(seleccionada.id)}
          añadirACompra={añadirACompra}
        />
      )}
    </div>
  )
}
