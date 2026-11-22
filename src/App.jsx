// Importa el componente CalculadoraTarifa que creamos para Eagle Box
import CalculadoraTarifa from './components/CalculadoraTarifa.jsx'

// Declara el componente principal App (función que devuelve JSX)
function App() {
  // Retorna la estructura visual de la página
  return (
    // Contenedor general con la clase "app" para aplicar estilos
    <main className="app">
      {/* Encabezado con el nombre y lema de la plataforma */}
      <header className="app-header">
        {/* Título principal de la marca */}
        <h1>🦅 EAGLE BOX</h1>
        {/* Lema de la empresa */}
        <p>Delivering beyond boundaries</p>
      </header>
      {/* Se usa el componente reutilizable de cálculo de tarifa (CU04) */}
      <CalculadoraTarifa />
      {/* Pie de página con los datos del aprendiz */}
      <footer className="app-footer">
        Jaime Andrés Bejarano Pautt · ADSO · SENA 2026
      </footer>
    </main>
  )
}

// Exporta App para que main.jsx pueda importarlo
export default App
