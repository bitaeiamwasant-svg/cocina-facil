// Normaliza texto: minúsculas, sin acentos, sin plurales simples.
export function normaliza(txt) {
  return txt
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita acentos
    .replace(/s$/, '') // quita plural simple
}

// Convierte el texto del usuario ("huevos, leche y pan") en una lista limpia.
export function parseIngredientes(texto) {
  return texto
    .split(/[,\n;]| y /i)
    .map((t) => normaliza(t))
    .filter(Boolean)
}

// Devuelve las recetas ordenadas por cuántos ingredientes coinciden.
export function buscarRecetas(recetas, ingredientesUsuario) {
  const tengo = new Set(ingredientesUsuario)

  return recetas
    .map((receta) => {
      const requeridos = receta.ingredientes.map(normaliza)
      const disponibles = requeridos.filter((i) => tengo.has(i))
      const faltantes = requeridos.filter((i) => !tengo.has(i))
      const porcentaje = Math.round((disponibles.length / requeridos.length) * 100)
      return { receta, disponibles, faltantes, porcentaje }
    })
    .filter((r) => r.disponibles.length > 0)
    .sort((a, b) => b.porcentaje - a.porcentaje || a.faltantes.length - b.faltantes.length)
}
