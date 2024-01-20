import './App.css'
import React, { useState, useEffect } from 'react'
import PageConstruccion from './Pages/Construccion'
import PageLaunchpad from './Pages/Launchpad'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from './config.js'

function App() {
  const [state, setState] = useState([])
  const [loadingFromStorageState, setLoadingFromStorageState] = useState(true)

  useEffect(() => {
    if (loadingFromStorageState) {
      const productosRef = collection(db, 'productos')
      getDocs(productosRef).then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setState(data)
        setLoadingFromStorageState(false)
      })
    }
    // Elimina 'state' de las dependencias para evitar un bucle infinito
  }, [loadingFromStorageState])

  const ActualizarItems = (id) => {
    // Encuentra el producto que quieres actualizar
    const productToUpdate = state.find((item) => item.id === id)

    if (productToUpdate) {
      // Calcula el nuevo valor de 'vendidos'
      const newVendidosValue = productToUpdate.vendidos + 1

      // Crea una referencia al documento en Firestore
      const productRef = doc(db, 'productos', id)

      // Actualiza el campo en Firestore
      updateDoc(productRef, {
        vendidos: newVendidosValue
      })
        .then(() => {
          // Actualiza el estado local después de que Firestore se haya actualizado
          const newState = state.map((item) => {
            if (item.id === id) {
              return { ...item, vendidos: newVendidosValue }
            }
            return item
          })
          setState(newState)
        })
        .catch((error) => {
          console.error('Error al actualizar el documento: ', error)
        })
    }
  }

  return (
    <div className="App">
      <PageLaunchpad state={state} ActualizarItems={ActualizarItems} />
      {/* <PageConstruccion /> */}
    </div>
  )
}

export default App
