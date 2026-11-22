# Crea el historial Git y sube el proyecto a GitHub (Windows PowerShell)
# Uso: 1) Crea el repositorio vacío "eaglebox-tarifa" en github.com/andresbptt-jj
#      2) En esta carpeta: powershell -ExecutionPolicy Bypass -File .\subir-a-github.ps1
git init -b main
git config user.name "Jaime Andrés Bejarano Pautt"
git add package.json package-lock.json vite.config.js index.html .gitignore LICENSE
git commit -m "chore: inicializa proyecto React + Vite"
git add src/main.jsx src/App.jsx src/index.css
git commit -m "feat: estructura base de la app y estilos Eagle Box"
git add src/data
git commit -m "feat: catálogo de vehículos y tarifas"
git checkout -b develop
git add src/components
git commit -m "feat(CU04): componente CalculadoraTarifa comentado línea a línea"
git add src/__tests__
git commit -m "test: pruebas unitarias y de interfaz con Vitest"
git add .github
git commit -m "ci: GitHub Actions para pruebas, build y despliegue a Pages"
git add .
git commit -m "docs: README, changelog y guía de ejecución"
git checkout main
git merge --no-ff develop -m "merge: develop -> main (release v1.0.0)"
git tag -a v1.0.0 -m "Versión 1.0.0"
git remote add origin https://github.com/andresbptt-jj/eaglebox-tarifa.git
git push -u origin main --tags
git push origin develop
Write-Host "Listo. Activa GitHub Pages en Settings > Pages > Source: GitHub Actions"
