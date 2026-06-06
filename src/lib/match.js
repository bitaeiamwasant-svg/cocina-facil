// Sinónimos regionales -> término canónico que usan las recetas.
// Así "papa" y "patata" (o "palta"/"aguacate") se tratan como el mismo ingrediente.
const SINONIMOS = {
  papa: 'patata',
  palta: 'aguacate',
  jitomate: 'tomate',
  choclo: 'maiz',
  elote: 'maiz',
  arveja: 'guisante',
  chicharo: 'guisante',
  aji: 'pimiento',
  morron: 'pimiento',
  pimenton: 'pimiento',
  banana: 'platano',
  cambur: 'platano',
  camote: 'boniato',
  durazno: 'melocoton',
  frutilla: 'fresa',
  mani: 'cacahuete',
  poroto: 'frijol',
  habichuela: 'frijol',
  // Carnes y pescados
  chuleta: 'cerdo',
  chancho: 'cerdo',
  puerco: 'cerdo',
  res: 'carne',
  ternera: 'carne',
  bistec: 'carne',
  bife: 'carne',
  merluza: 'pescado',
  tilapia: 'pescado',
  bacalao: 'pescado',
  // Hongos (champiñón -> "champinon"/"champinone" tras quitar acentos/plural)
  champinon: 'hongo',
  champinone: 'hongo',
  seta: 'hongo',
  callampa: 'hongo',
  // Tipos de queso -> queso
  mozzarella: 'queso',
  mozarella: 'queso',
  parmesano: 'queso',
  cheddar: 'queso',
  gouda: 'queso',
  manchego: 'queso',
  ricotta: 'queso',
  feta: 'queso',
  // Mariscos
  gamba: 'camaron',
  langostino: 'camaron',
  quisquilla: 'camaron',
  choro: 'mejillon',
  calamare: 'calamar', // "calamares" -> "calamare" tras quitar una "s"
  // Verduras (variantes regionales de judía verde)
  ejote: 'judia',
  chaucha: 'judia',
  vainita: 'judia',
  // Postres / desayunos
  yogurt: 'yogur',
  yoghurt: 'yogur',
  // Categoría: "crema(s)" también encuentra las sopas (no hay ingrediente "crema")
  crema: 'sopa'
}

// Normaliza texto: minúsculas, sin acentos, sin plural simple y unifica sinónimos.
export function normaliza(txt) {
  const limpio = txt
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita acentos
  // Sinónimo directo primero, para no romper palabras singulares que acaban en "s"
  // (p. ej. "res" -> "carne"). Si no hay, quitamos el plural y reintentamos.
  if (SINONIMOS[limpio]) return SINONIMOS[limpio]
  const base = limpio
    .replace(/ones$/, 'on') // plural español -ones -> -ón (camarones->camaron, limones->limon)
    .replace(/s$/, '') // quita plural simple
  return SINONIMOS[base] || base
}

// Convierte el texto del usuario ("huevos, leche y pan") en una lista limpia.
export function parseIngredientes(texto) {
  return texto
    .split(/[,\n;]| y /i)
    .map((t) => normaliza(t))
    .filter(Boolean)
}

// Devuelve las recetas ordenadas por cuántos ingredientes coinciden.
// También admite buscar por categoría (p. ej. "postres", "desayunos").
export function buscarRecetas(recetas, ingredientesUsuario) {
  const tengo = new Set(ingredientesUsuario)

  return recetas
    .map((receta) => {
      const requeridos = receta.ingredientes.map(normaliza)
      const disponibles = requeridos.filter((i) => tengo.has(i))
      const faltantes = requeridos.filter((i) => !tengo.has(i))
      const porcentaje = Math.round((disponibles.length / requeridos.length) * 100)
      // ¿el usuario escribió el nombre de la categoría? (postre, desayuno...)
      const categoriaMatch = receta.categoria ? tengo.has(normaliza(receta.categoria)) : false
      return { receta, disponibles, faltantes, porcentaje, categoriaMatch }
    })
    .filter((r) => r.disponibles.length > 0 || r.categoriaMatch)
    .sort(
      (a, b) =>
        Number(b.categoriaMatch) - Number(a.categoriaMatch) ||
        b.porcentaje - a.porcentaje ||
        a.faltantes.length - b.faltantes.length
    )
}
