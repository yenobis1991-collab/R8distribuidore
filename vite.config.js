import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "base" debe coincidir con el nombre del repositorio en GitHub,
// porque el enlace será https://usuario.github.io/R8distribuidore/
export default defineConfig({
  base: '/R8distribuidore/',
  plugins: [react()],
})
