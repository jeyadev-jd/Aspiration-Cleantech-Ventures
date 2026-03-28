import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Sitemap from "vite-plugin-sitemap"

const dynamicRoutes = [
  '/', '/academy', '/about', '/contact', '/teams', '/services', '/projects', '/pricing', '/faq', '/blogs',
  '/academy/course/1', '/academy/course/2', '/academy/course/3', '/academy/course/4', '/academy/course/5',
  '/academy-register'
];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://aspcv.com', // Replace with your actual domain
      dynamicRoutes,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
