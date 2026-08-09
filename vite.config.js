import { defineConfig } from 'vite'

export default defineConfig({
  // BASE DO GITHUB PAGES: se o repositório se chama "Universo-Alternativo"
  base: 'Universo-Alternativo',
  
  server: {
    host: '0.0.0.0',           // permite acesso externo (celular, etc)
    allowedHosts: [
      '.ngrok-free.dev'        // libera domínios do ngrok para testes
    ]
  },
  
  build: {
    outDir: 'dist',            // pasta de saída do build
    assetsDir: 'assets',       // onde ficam os assets
    emptyOutDir: true          // limpa a pasta antes de buildar
  }
})
