// Componente reutilizable: recibe el objeto "equipo" mediante props
function colorDeEstado(estado) {
  if (estado === 'Disponible') return 'bg-success'
  if (estado === 'En mantenimiento') return 'bg-warning text-dark'
  return 'bg-danger'
}

function TarjetaEquipo({ equipo }) {
  const { nombre, categoria, cantidad, estado } = equipo

  return (
    <div className="card tarjeta-equipo h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle mb-3 text-muted">{categoria}</h6>
        <p className="card-text mb-3">
          Cantidad disponible: <strong>{cantidad}</strong>
        </p>
        <span className={`badge ${colorDeEstado(estado)}`}>{estado}</span>
      </div>
    </div>
  )
}

export default TarjetaEquipo
