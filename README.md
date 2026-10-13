# ROVELBOTS — Sitio corporativo

Firma de ingeniería de software para empresas. Vue 3 + Vite 8 + Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # compila a dist/
npm run preview  # previsualiza dist/
```

## Despliegue en Hostinger (vía GitHub)

1. **Crear el repositorio** en GitHub (nombre sugerido: `rovelbots-web`) y subir `main`:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/rovelbots-web.git
   git push -u origin main
   ```
2. **Agregar los secrets** en GitHub → Settings → Secrets and variables → Actions:
   `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`
   (los datos FTP están en hPanel → Hosting → Cuentas FTP;
   `FTP_SERVER_DIR` suele ser `public_html/`).
3. **Cada push a `main`** compila y publica automáticamente.
   También se puede lanzar manual desde Actions → Build & Deploy → Run workflow.

> Alternativa manual: `npm run build` y subir el **contenido de `dist/`**
> a `public_html/` con el Administrador de archivos o FileZilla.

> ⚠️ `public/` contiene un PDF con datos personales. Revisar antes de publicar.
