import { useState, useEffect } from 'react'

// Hook para guardar estado en localStorage (favoritas, lista de compra).
export function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      /* sin espacio o modo privado: ignoramos */
    }
  }, [clave, valor])

  return [valor, setValor]
}
