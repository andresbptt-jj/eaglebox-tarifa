// Importa el hook useState de React para manejar datos que cambian
import { useState } from 'react'
// Importa el catálogo de vehículos con sus tarifas
import { VEHICULOS } from '../data/vehiculos.js'

// Función auxiliar: convierte un número a formato de pesos colombianos
const formatoCOP = (valor) =>
  // Intl.NumberFormat da formato de moneda COP sin decimales
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(valor)

// Función pura que calcula la tarifa (regla de negocio CU04)
export function calcularTarifa(vehiculo, km, peso) {
  // Si el peso supera la capacidad del vehículo, se retorna un error
  if (peso > vehiculo.pesoMax) return { error: `El peso máximo para ${vehiculo.nombre} es ${vehiculo.pesoMax} kg` }
  // Calcula el valor por distancia: kilómetros × tarifa por km
  const porDistancia = km * vehiculo.porKm
  // Se cobra el mayor entre la tarifa mínima y el valor por distancia
  let total = Math.max(vehiculo.minima, porDistancia)
  // Si el vehículo tiene descuento (eléctrico −10% Rewards) se aplica
  if (vehiculo.descuento) total = total * (1 - vehiculo.descuento)
  // Calcula la huella de carbono estimada en kg de CO2 (RN-024)
  const co2 = km * vehiculo.co2Km
  // Retorna el total redondeado y la huella con 2 decimales
  return { total: Math.round(total), co2: co2.toFixed(2) }
}

// Componente funcional CalculadoraTarifa
function CalculadoraTarifa() {
  // Estado del vehículo seleccionado (inicia en "moto")
  const [vehiculoId, setVehiculoId] = useState('moto')
  // Estado de la distancia en kilómetros
  const [km, setKm] = useState(5)
  // Estado del peso del paquete en kilogramos
  const [peso, setPeso] = useState(2)
  // Estado del resultado del cálculo (null = aún no se calcula)
  const [resultado, setResultado] = useState(null)

  // Busca en el catálogo el vehículo que coincide con el id seleccionado
  const vehiculo = VEHICULOS.find((v) => v.id === vehiculoId)

  // Manejador del envío del formulario
  const manejarSubmit = (e) => {
    // Evita que el navegador recargue la página
    e.preventDefault()
    // Valida que la distancia sea mayor a cero
    if (km <= 0) return setResultado({ error: 'La distancia debe ser mayor a 0 km' })
    // Calcula y guarda el resultado en el estado
    setResultado(calcularTarifa(vehiculo, Number(km), Number(peso)))
  }

  // JSX que se pinta en pantalla
  return (
    // Tarjeta contenedora del componente
    <section className="card" aria-labelledby="titulo-tarifa">
      {/* Título del componente, enlazado por aria para accesibilidad */}
      <h2 id="titulo-tarifa">Calcular tarifa de envío</h2>
      {/* Formulario que ejecuta manejarSubmit al enviarse */}
      <form onSubmit={manejarSubmit}>
        {/* Etiqueta y selector del tipo de vehículo */}
        <label htmlFor="vehiculo">Tipo de vehículo</label>
        {/* Select controlado: su valor viene del estado vehiculoId */}
        <select id="vehiculo" value={vehiculoId} onChange={(e) => setVehiculoId(e.target.value)}>
          {/* Recorre el catálogo con map y crea una opción por vehículo */}
          {VEHICULOS.map((v) => (
            // key única para que React identifique cada opción
            <option key={v.id} value={v.id}>{v.nombre}</option>
          ))}
        </select>
        {/* Campo de distancia en km */}
        <label htmlFor="km">Distancia (km)</label>
        {/* Input numérico controlado que actualiza el estado km */}
        <input id="km" type="number" min="0" step="0.1" value={km} onChange={(e) => setKm(e.target.value)} />
        {/* Campo de peso del paquete */}
        <label htmlFor="peso">Peso del paquete (kg)</label>
        {/* Input numérico controlado que actualiza el estado peso */}
        <input id="peso" type="number" min="0" step="0.1" value={peso} onChange={(e) => setPeso(e.target.value)} />
        {/* Texto de ayuda con datos del vehículo elegido */}
        <p className="ayuda">Mínima {formatoCOP(vehiculo.minima)} · {formatoCOP(vehiculo.porKm)}/km · máx. {vehiculo.pesoMax} kg</p>
        {/* Botón que envía el formulario */}
        <button type="submit">Calcular tarifa</button>
      </form>

      {/* Renderizado condicional: si hay error se muestra el mensaje */}
      {resultado?.error && <p className="error" role="alert">{resultado.error}</p>}
      {/* Si hay total, se muestra el resultado del cálculo */}
      {resultado?.total && (
        // Caja de resultado con aria-live para lectores de pantalla
        <div className="resultado" aria-live="polite">
          {/* Valor total formateado en pesos */}
          <span className="total">{formatoCOP(resultado.total)}</span>
          {/* Huella de carbono estimada del servicio */}
          <span>Huella estimada: {resultado.co2} kg CO₂</span>
          {/* Mensaje extra solo si el vehículo tiene descuento */}
          {vehiculo.descuento && <span className="badge">−10% Eagle Rewards aplicado</span>}
        </div>
      )}
    </section>
  )
}

// Exporta el componente para usarlo en App.jsx
export default CalculadoraTarifa
