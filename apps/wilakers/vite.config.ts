import { fileURLToPath } from 'node:url';
import postcssVarCompress from 'postcss-variable-compress';
import { defineConfig, Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';

const path_root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  css: { modules: { exportGlobals: true }, preprocessorOptions: { scss: { api: 'modern-compiler' } }, devSourcemap: true, postcss: { plugins: [postcssVarCompress()] } }, //prettier-ignore

  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Wilakers',
        short_name: 'Wilakers',
        description: 'Wilakers',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    // sassDts({
    //   enabled: true,
    //   outputDir: 'src/types',
    //   fileName: 'sass.d.ts',
    //   include: ['**/*.module.scss'],
    // }),
    // sassDts({ enabledMode: ['development', 'production'], esmExport: true, prettierFilePath: resolve(path_root, '.prettierrc') }), //prettier-ignore

    {
      name: 'vite-plugin-optimize-solid-css-modules',
      enforce: 'pre',
      transform(code, id) {
        if (/\.[mc]?[jt]sx$/.test(id))
          code = code.replace(
            /class=\{([a-zA-Z '"`[\].-]+|(?:`(?:\$\{[a-zA-Z '"`[\].-]+\}\s*)+)`)\}/g, // eslint-disable-line regexp/no-useless-non-capturing-group
            'class={/*@once*/$1}' //TODO: Tighten regex to avoid store. Allow 1 ./space?
          );
        return { code, map: null };
      },
    } as Plugin,
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    manifest: 'src/assets/manifest.json',
    cssMinify: 'lightningcss',
  },
  publicDir: 'public',
});
