import { defineConfig } from 'vite'
<<<<<<< HEAD
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
=======
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
>>>>>>> upstream/조재희/main

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    tailwindcss(),
=======
    babel({ presets: [reactCompilerPreset()] })
>>>>>>> upstream/조재희/main
  ],
})
