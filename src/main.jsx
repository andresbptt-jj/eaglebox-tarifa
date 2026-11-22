// Importa la librería React, necesaria para usar JSX
import React from 'react'
// Importa ReactDOM, que se encarga de pintar los componentes en el navegador
import ReactDOM from 'react-dom/client'
// Importa el componente principal de la aplicación
import App from './App.jsx'
// Importa la hoja de estilos global del proyecto
import './index.css'

// Busca el div con id "root" en index.html y crea ahí la raíz de React
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode activa advertencias extra durante el desarrollo
  <React.StrictMode>
    {/* Renderiza el componente App dentro de la raíz */}
    <App />
  </React.StrictMode>
)
