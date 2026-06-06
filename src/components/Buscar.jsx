import { useMemo, useState } from 'react'
import { parseIngredientes, buscarRecetas } from '../lib/match.js'
import { useLocalStorage } from '../lib/useLocalStorage.js'
import RecetaCard from './RecetaCard.jsx'

const FILTROS_TIEMPO = [
  { id: 0, label: 'Cualquiera' },
  { id: 15, label: '≤ 15 min' },
  { id: 30, label: '≤ 30 min' }
]
const FILTROS_DIFICULTAD = ['Todas', 'Fácil', 'Media']

export default function Buscar({ recetas, onAbrir, esFavorita, toggleFavorita }) {
  const [texto, setTexto] = useState('')
  const [buscado, setBuscado] = useState(false)
  const [maxTiempo, setMaxTiempo] = useLocalStorage('cf:filtroTiempo', 0)
  const [dificultad, setDificultad] = useLocalStorage('cf:filtroDificultad', 'Todas')

  const hayIngredientes = parseIngredientes(texto).length > 0

  const encontradas = useMemo(() => {
    const ingredientes = parseIngredientes(texto)
    if (ingredientes.length === 0) return []
    return buscarRecetas(recetas, ingredientes)
  }, [texto, recetas])

  // Recetas fáciles para mostrar al entrar, cuando aún no se ha escrito nada.
  const destacadas = useMemo(
    () => recetas.filter((r) => r.dificultad === 'Fácil').slice(0, 6),
    [recetas]
  )

  const hayFiltros = maxTiempo !== 0 || dificultad !== 'Todas'
  const limpiarFiltros = () => {
    setMaxTiempo(0)
    setDificultad('Todas')
  }

  const resultados = useMemo(
    () =>
      encontradas.filter((r) => {
        const okTiempo = maxTiempo === 0 || r.receta.tiempo <= maxTiempo
        const okDif = dificultad === 'Todas' || r.receta.dificultad === dificultad
        return okTiempo && okDif
      }),
    [encontradas, maxTiempo, dificultad]
  )

  return (
    <section>
      <h2 className="titulo-seccion">¿Qué tienes en la nevera?</h2>
      <p className="ayuda">Escribe tus ingredientes separados por comas.</p>

      <div className="buscador">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="huevos, leche, cebolla, tomate..."
          rows={3}
        />
        <button className="btn-principal" onClick={() => setBuscado(true)}>
          Buscar recetas
        </button>
      </div>

      {encontradas.length > 0 && (
        <div className="filtros">
          <div className="filtro-grupo">
            <span className="filtro-label">⏱ Tiempo</span>
            <div className="chips">
              {FILTROS_TIEMPO.map((f) => (
                <button
                  key={f.id}
                  className={maxTiempo === f.id ? 'chip activo' : 'chip'}
                  onClick={() => setMaxTiempo(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="filtro-grupo">
            <span className="filtro-label">👩‍🍳 Dificultad</span>
            <div className="chips">
              {FILTROS_DIFICULTAD.map((d) => (
                <button
                  key={d}
                  className={dificultad === d ? 'chip activo' : 'chip'}
                  onClick={() => setDificultad(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          {hayFiltros && (
            <button className="limpiar-filtros" onClick={limpiarFiltros}>
              ✕ Limpiar filtros
            </button>
          )}
        </div>
      )}

      {resultados.length > 0 && (
        <p className="contador">
          {resultados.length} {resultados.length === 1 ? 'receta encontrada' : 'recetas encontradas'}
        </p>
      )}

      {buscado && hayIngredientes && encontradas.length === 0 && (
        <p className="vacio">No encontramos recetas con esos ingredientes. ¡Prueba con otros!</p>
      )}

      {encontradas.length > 0 && resultados.length === 0 && (
        <p className="vacio">Ninguna receta cumple esos filtros. Prueba a relajarlos.</p>
      )}

      <div className="grid">
        {resultados.map((r) => (
          <RecetaCard
            key={r.receta.id}
            receta={r.receta}
            match={r}
            onAbrir={onAbrir}
            esFavorita={esFavorita(r.receta.id)}
            toggleFavorita={() => toggleFavorita(r.receta.id)}
          />
        ))}
      </div>

      {!hayIngredientes && (
        <div className="destacadas">
          <h3 className="titulo-seccion">🍳 Recetas fáciles para empezar</h3>
          <p className="ayuda">Toca una para verla, o escribe arriba lo que tienes.</p>
          <div className="grid">
            {destacadas.map((receta) => (
              <RecetaCard
                key={receta.id}
                receta={receta}
                onAbrir={onAbrir}
                esFavorita={esFavorita(receta.id)}
                toggleFavorita={() => toggleFavorita(receta.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
