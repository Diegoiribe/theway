import './App.css'
import React, { useState, useEffect } from 'react'
import PageConstruccion from './Pages/Construccion'
import PageLaunchpad from './Pages/Launchpad'

function App() {
  const [state, setState] = useState([{ id: 1, cantidad: 100, vendidos: 2 }])
  const [loadingFromStorageState, setLoadingFromStorageState] = useState(true)

  useEffect(() => {
    // Intenta cargar datos de localStorage solo si loadingFromStorage es true
    if (loadingFromStorageState) {
      const storedState = localStorage.getItem('state')
      if (storedState) {
        setState(JSON.parse(storedState))
      }
      setLoadingFromStorageState(false) // Desactiva la carga desde localStorage después de cargar
    } else {
      // Guarda datos en localStorage cuando cita cambia
      localStorage.setItem('state', JSON.stringify(state))
    }
  }, [state, loadingFromStorageState])

  const ActualizarItems = (id) => {
    const newState = state.map((item) => {
      if (item.id === id) {
        return { ...item, vendidos: item.vendidos + 1 }
      }
      return item
    })
    setState(newState)
  }

  return (
    <div className="App">
      <PageLaunchpad state={state} ActualizarItems={ActualizarItems} />
      {/* <PageConstruccion /> */}
    </div>
  )
}

export default App
