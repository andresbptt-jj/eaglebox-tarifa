// Prueba de interfaz: el usuario calcula una tarifa y ve el resultado
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CalculadoraTarifa from '../components/CalculadoraTarifa.jsx'

describe('<CalculadoraTarifa />', () => {
  it('muestra el total al presionar "Calcular tarifa"', () => {
    render(<CalculadoraTarifa />)
    fireEvent.change(screen.getByLabelText('Distancia (km)'), { target: { value: '8' } })
    fireEvent.click(screen.getByRole('button', { name: 'Calcular tarifa' }))
    expect(screen.getByText(/7\.200/)).toBeTruthy()
  })
})
