import './App.css'
import React, { useState, useEffect } from 'react'
import PageConstruccion from './Pages/Construccion'
import PageLaunchpad from './Pages/Launchpad'
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getDocs
} from 'firebase/firestore'
import { db } from './config.js'

function App() {
  const [state, setState] = useState([])
  const [loadingFromStorageState, setLoadingFromStorageState] = useState(true)

  useEffect(() => {
    const productosRef = collection(db, 'productos')

    // Escuchar cambios en tiempo real
    const unsubscribe = onSnapshot(productosRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setState(data)
      setLoadingFromStorageState(false)
    })

    // Esta función se llama cuando el componente se desmonta,
    // lo cual es importante para evitar pérdidas de memoria.
    return () => unsubscribe()
  }, []) // El arreglo de dependencias vacío asegura que esto se ejecute solo una vez al montar el componente

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
