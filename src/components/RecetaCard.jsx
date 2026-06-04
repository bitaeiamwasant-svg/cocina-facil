export default function RecetaCard({ receta, match, onAbrir, esFavorita, toggleFavorita }) {
  return (
    <article className="card" onClick={() => onAbrir(receta)}>
      <div className="card-img" style={{ backgroundImage: `url(${receta.imagen})` }}>
        {match && match.porcentaje === 100 && (
          <span className="badge listo">¡Tienes todo!</span>
        )}
        <button
          className={esFavorita ? 'fav activo' : 'fav'}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorita()
          }}
          aria-label="Favorita"
        >
          {esFavorita ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-body">
        <h3>{receta.nombre}</h3>
        <div className="meta">
          <span>⏱ {receta.tiempo} min</span>
          <span>· {receta.dificultad}</span>
        </div>
        {match && match.faltantes.length > 0 && (
          <p className="faltan">Te falta: {match.faltantes.join(', ')}</p>
        )}
      </div>
    </article>
  )
}
