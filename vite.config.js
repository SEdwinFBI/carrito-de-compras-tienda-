import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://SEdwinFBI.github.io/carrito-de-compras-tienda-',
  //server:{
    //host:'192.168.0.103'
  //}
})
