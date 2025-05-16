import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  build:{
    rollupOptions:{
      output:{
        manualChunks(id){
          console.log('id',id);
          
          if(id.includes('node_modules')){
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  },
  server: {
    port: 8080,
    open: true,
  },
})