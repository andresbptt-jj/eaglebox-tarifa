// Catálogo de vehículos de Eagle Box (tomado del documento del proyecto ADSO)
// Cada objeto tiene: id, nombre, peso máximo (kg), tarifa mínima y tarifa por km (COP)
export const VEHICULOS = [
  { id: 'moto', nombre: 'Moto', pesoMax: 20, minima: 3500, porKm: 900, co2Km: 0.07 },
  { id: 'bici', nombre: 'Bicicleta', pesoMax: 10, minima: 2500, porKm: 500, co2Km: 0 },
  { id: 'auto', nombre: 'Automóvil', pesoMax: 500, minima: 5000, porKm: 1200, co2Km: 0.17 },
  { id: 'electrico', nombre: 'Vehículo eléctrico', pesoMax: 500, minima: 5500, porKm: 1100, co2Km: 0.04, descuento: 0.1 },
  { id: 'suv', nombre: 'Camioneta / SUV', pesoMax: 800, minima: 8000, porKm: 1700, co2Km: 0.22 },
  { id: 'van', nombre: 'Van', pesoMax: 1200, minima: 12000, porKm: 2200, co2Km: 0.25 },
  { id: 'npr', nombre: 'Camión NPR / furgón', pesoMax: 3000, minima: 35000, porKm: 3500, co2Km: 0.6 },
  { id: 'furgon', nombre: 'Furgón grande', pesoMax: 8000, minima: 90000, porKm: 4500, co2Km: 0.9 },
  { id: 'drone', nombre: 'Drone', pesoMax: 3, minima: 6000, porKm: 2500, co2Km: 0.01 },
]
