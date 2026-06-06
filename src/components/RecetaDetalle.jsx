import { useState } from 'react'

export default function RecetaDetalle({ receta, onCerrar, esFavorita, toggleFavorita, añadirACompra }) {
  const [preguntaCompra, setPreguntaCompra] = useState(false)
  const [añadido, setAñadido] = useState(false)

  const confirmarCompra = () => {
    añadirACompra([...receta.ingredientes, ...(receta.basicos || [])])
    setAñadido(true)
  }

  // Búsqueda en YouTube del nombre de la receta. Se abre en YouTube (no se incrusta),
  // así nunca hay embeds rotos ni cookies de Google dentro de la app.
  const urlYouTube =
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent('receta ' + receta.nombre)

  return (
    <div className="modal-fondo" onClick={onCerrar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onCerrar} aria-label="Cerrar">✕</button>

        <div className="modal-img" style={{ backgroundImage: `url(${receta.imagen})` }} />

        <div className="modal-body">
          <div className="modal-head">
            <h2>{receta.nombre}</h2>
            <button className={esFavorita ? 'fav activo grande' : 'fav grande'} onClick={toggleFavorita}>
              {esFavorita ? '❤️' : '🤍'}
            </button>
          </div>
          <div className="meta">
            <span>⏱ {receta.tiempo} min</span>
            <span>· {receta.dificultad}</span>
          </div>

          <a className="btn-youtube" href={urlYouTube} target="_blank" rel="noopener noreferrer">
            ▶ Ver video en YouTube
          </a>

          <h4>Ingredientes</h4>
          <ul className="ingredientes">
            {receta.ingredientes.map((i) => <li key={i}>{i}</li>)}
            {(receta.basicos || []).map((i) => <li key={i} className="basico">{i}</li>)}
          </ul>

          <h4>Preparación</h4>
          <ol className="pasos">
            {receta.pasos.map((p, idx) => <li key={idx}>{p}</li>)}
          </ol>

          {!preguntaCompra && !añadido && (
            <button className="btn-principal" onClick={() => setPreguntaCompra(true)}>
              Terminé de cocinar
            </button>
          )}

          {preguntaCompra && !añadido && (
            <div className="encuesta">
              <p>¿Te gustó la receta? ¿Añadimos los ingredientes a tu lista de compras?</p>
              <div className="botones">
                <button className="btn-principal" onClick={confirmarCompra}>Sí, añadir a la lista 🛒</button>
                <button className="btn-secundario" onClick={onCerrar}>No, gracias</button>
              </div>
            </div>
          )}

          {añadido && (
            <p className="ok">✅ ¡Añadido a tu lista de compras!</p>
          )}
        </div>
      </div>
    </div>
  )
}
