import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import AutoImport from "unplugin-auto-import/vite";
import vueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueTypeImports(),
    AutoImport({
      //Targets (file extensions)
      include: [
        /\.[tj]sx?$/, //Regex which says t or j followed by sx. //tsx, jsx, ? next to x says it can happen zero or one time js,ts
        /\.vue$/, //$ at the end says it ends with vue
      ],
      //globals (libraries)
      imports: ["vue", "vue-router", "pinia"],
      //other settings/files/dirs to import
      dts: true, //Autoimport all the files that ends with d.ts
      //Autoimport inside vue template
      vueTemplate: true,
      eslintrc: { enabled: true },
    }),
  ],
  base: '/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  }
})
