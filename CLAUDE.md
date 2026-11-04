# Portafolio de Juan Camilo

Portafolio de un estudiante de Ingeniería Mecánica (Colombia). Todo el contenido y la interfaz van en español; el sitio será bilingüe más adelante.

## Stack

- Astro 7 + MDX, sitio estático. Contenido en `src/content/` (esquema en `src/content.config.ts`).
- Tailwind CSS 4 para tokens (`src/styles/global.css`, bloque `@theme`); componentes con estilos con alcance de Astro.
- KaTeX (remark-math + rehype-katex) para ecuaciones; Mermaid.js para diagramas (bloques ```mermaid, se convierten en `src/plugins/rehype-mermaid.mjs` y se dibujan en el navegador desde `src/layouts/Base.astro`).
- `<model-viewer>` para modelos 3D (`src/components/ModeloCAD.astro`).
- Publicación en GitHub Pages con `.github/workflows/deploy.yml`; base `/Portafolio`. Usa `url()` de `src/config.ts` para todo enlace interno.

## Dirección visual (definida por Juan Camilo)

- Proyectos: post-its con imagen principal sobre un fondo de plano (blueprint).
- Fundamentos: estanterías con libros verticales y el título en el lomo.
- Paleta fija: texto #000000 y #44546A; fondos #FFFFFF y #E7E6E6; énfasis #2B273F, #2DACDD, #A5A5A5, #FFC000, #4472C4, #70AD47; vínculo #0563C1, visitado #954F72. No introducir colores fuera de la paleta salvo tintes derivados de ella.
- Tipografías: IBM Plex Sans (texto), Caveat (escritura a mano en post-its), IBM Plex Mono solo para cotas y datos.

## Skills

Usa `.claude/skills/impeccable` para diseño y `.claude/skills/emil-design-eng`, `animation-performance` y `review-animations` para animaciones e interacciones.

## Reglas legales y éticas (Colombia)

- Ley 842 de 2003: nunca presentar al autor como "Ingeniero"; es estudiante sin matrícula profesional. Mantener los descargos de "trabajo académico".
- Ley 23 de 1982: acreditar coautores y fuentes; no publicar material de terceros sin permiso. Contenido bajo CC BY-NC-ND 4.0, código MIT.
- Ley 1581 de 2012: el sitio no recolecta datos (sin formularios, sin cookies, sin analítica). Si se agrega un formulario o analítica, actualizar `src/pages/legal.astro` con autorización expresa y política de tratamiento.
- No publicar datos personales del autor (correo, teléfono) sin que él los ponga en `src/config.ts`.

## Comandos

- `npm run dev` servidor local, `npm run build` compila a `dist/`.
