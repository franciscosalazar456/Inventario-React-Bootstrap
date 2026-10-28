import { useState } from 'react'
import TarjetaEquipo from './components/TarjetaEquipo.jsx'
import './App.css'

// Arreglo de objetos con los equipos del laboratorio
const equipos = [
  { id: 1, nombre: 'Proyector Epson', categoria: 'Audiovisual', cantidad: 4, estado: 'Disponible' },
  { id: 2, nombre: 'Router Cisco', categoria: 'Redes', cantidad: 6, estado: 'Disponible' },
  { id: 3, nombre: 'Laptop Dell', categoria: 'Computadoras', cantidad: 2, estado: 'En mantenimiento' },
  { id: 4, nombre: 'Kit Arduino UNO', categoria: 'Electrónica', cantidad: 0, estado: 'Agotado' },
  { id: 5, nombre: 'Switch TP-Link', categoria: 'Redes', cantidad: 3, estado: 'Disponible' },
]

function App() {
  // Estado que controla si el inventario está visible
  const [mostrar, setMostrar] = useState(true)

  const alternarInventario = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="container py-4">
      <header className="encabezado text-center mb-4">
        <h1 className="display-6 fw-bold">Inventario de equipos del laboratorio</h1>
        <p className="lead text-secondary mb-0">
          Consulta rápidamente el nombre, la categoría, la cantidad disponible y el
          estado de cada equipo del laboratorio.
        </p>
      </header>

      <div className="text-center mb-4">
        <button
          type="button"
          className={`btn btn-lg ${mostrar ? 'btn-outline-primary' : 'btn-primary'}`}
          onClick={alternarInventario}
        >
          {mostrar ? 'Ocultar inventario' : 'Mostrar inventario'}
        </button>
      </div>

      {mostrar && (
        <section className="row g-4" aria-label="Lista de equipos">
          {equipos.map((equipo) => (
            <div className="col-12 col-sm-6 col-lg-4" key={equipo.id}>
              <TarjetaEquipo equipo={equipo} />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export default App
