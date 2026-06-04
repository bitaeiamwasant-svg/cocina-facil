import RecetaCard from './RecetaCard.jsx'

export default function Favoritas({ recetas, favoritas, onAbrir, toggleFavorita }) {
  const lista = recetas.filter((r) => favoritas.includes(r.id))

  return (
    <section>
      <h2 className="titulo-seccion">Mis recetas favoritas</h2>
      {lista.length === 0 ? (
        <p className="vacio">Aún no tienes favoritas. Toca el corazón ❤️ en una receta para guardarla.</p>
      ) : (
        <div className="grid">
          {lista.map((receta) => (
            <RecetaCard
              key={receta.id}
              receta={receta}
              onAbrir={onAbrir}
              esFavorita={true}
              toggleFavorita={() => toggleFavorita(receta.id)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
