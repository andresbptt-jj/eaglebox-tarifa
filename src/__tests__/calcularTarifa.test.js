// Pruebas unitarias de la regla de negocio CU04 (Vitest)
import { describe, it, expect } from 'vitest'
import { calcularTarifa } from '../components/CalculadoraTarifa.jsx'
import { VEHICULOS } from '../data/vehiculos.js'
const v = (id) => VEHICULOS.find((x) => x.id === id)

describe('calcularTarifa (CU04)', () => {
  it('Moto 8 km cobra km x tarifa = $7.200', () => {
    expect(calcularTarifa(v('moto'), 8, 2).total).toBe(7200)
  })
  it('Moto 2 km cobra la tarifa mínima $3.500', () => {
    expect(calcularTarifa(v('moto'), 2, 1).total).toBe(3500)
  })
  it('Eléctrico 12 km aplica -10% Eagle Rewards = $11.880', () => {
    expect(calcularTarifa(v('electrico'), 12, 50).total).toBe(11880)
  })
  it('Drone con 10 kg devuelve error de peso máximo', () => {
    expect(calcularTarifa(v('drone'), 5, 10).error).toBe('El peso máximo para Drone es 3 kg')
  })
  it('Calcula la huella de carbono (RN-024)', () => {
    expect(calcularTarifa(v('moto'), 8, 2).co2).toBe('0.56')
  })
})
