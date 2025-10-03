# Fotosíntesis — AR Biología

Repo base inspirado en "cartas-ar-biologia", adaptado **solo** a la fotosíntesis.

## Estructura
- `index.html` — landing con módulos y navegación.
- `pages/proceso.html` — pasos de la fotosíntesis.
- `pages/ecuacion.html` — ecuación global y entradas/salidas.
- `pages/cloroplasto.html` — visor 3D con `<model-viewer>` (arrastrar/soltar `.glb`).
- `pages/interactive.html` — quiz para estudiantes.
- `pages/ar.html` — plantilla AR.js con marcador Hiro.
- `assets/` — css/js e imágenes.

## Modelos 3D sugeridos (.glb)
- **Cloroplasto (Sketchfab)** — ver licencia y descargar formato compatible.
- **Membrana de tilacoide (Sketchfab)** — para destacar PSII/PSI y complejo b6f.
- **ATP sintasa (Sketchfab / NIH 3D)** — rotor F₀F₁ para explicar fotofosforilación.

> Puedes reemplazar `assets/models/demo.glb` en `pages/ar.html` y cargar tu `.glb` en `pages/cloroplasto.html`.

## Publicación
1. Sube todo a un repo en GitHub.
2. Activa **GitHub Pages** (branch `main`, root `/`).
3. Accede vía `https://usuario.github.io/repo/`.

---

© 2025-10-03 — Proyecto educativo para el Liceo Bicentenario San Nicolás.
