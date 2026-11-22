# 🦅 Eagle Box · Calculadora de Tarifa (CU04)

![CI](https://github.com/andresbptt-jj/eaglebox-tarifa/actions/workflows/ci.yml/badge.svg)

Componente React del proyecto ADSO **Eagle Box** (SENA). Evidencias GA7-220501096-AA3-EV01 y EV02.
**Autor:** Jaime Andrés Bejarano Pautt · **Instructor:** Juan Antonio Hernández Estrada

- Repositorio: https://github.com/andresbptt-jj/eaglebox-tarifa
- Demo: https://andresbptt-jj.github.io/eaglebox-tarifa/

## Funcionalidad
- Tarifa = máx(tarifa mínima, km × tarifa por km)
- Vehículo eléctrico: −10% Eagle Rewards
- Valida el peso máximo de cada vehículo
- Muestra la huella de carbono estimada (RN-024)

## Tecnologías
React 18 · Vite 5 · Vitest + Testing Library · GitHub Actions · GitHub Pages

## Ejecutar
```bash
npm install
npm run dev     # http://localhost:5173
npm test        # pruebas unitarias e interfaz
npm run build   # versión de producción en /dist
```

## Estructura
```
src/components/CalculadoraTarifa.jsx  componente (comentado línea a línea)
src/data/vehiculos.js                 catálogo de tarifas
src/__tests__/                        pruebas automatizadas
.github/workflows/ci.yml · deploy.yml CI y despliegue
```

## Subir a GitHub
1. Crea el repositorio vacío `eaglebox-tarifa` en https://github.com/andresbptt-jj
2. Ejecuta `powershell -ExecutionPolicy Bypass -File .\subir-a-github.ps1`
3. En GitHub: Settings → Pages → Source: **GitHub Actions**

## Licencia
MIT
