Place the licensed Zodiak Bold webfont files here as:

- `Zodiak-Bold.woff2`

`src/index.css` already declares the matching `@font-face` and will pick the
file up automatically once it exists. Until then, headings render with the
serif fallback stack (`"Playfair Display", ui-serif, Georgia, ... serif`).
