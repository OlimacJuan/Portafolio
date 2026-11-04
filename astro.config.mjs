// Configuración principal del sitio.
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from './src/plugins/rehype-mermaid.mjs';

export default defineConfig({
  // Dirección pública en GitHub Pages: https://olimacjuan.github.io/Portafolio/
  site: 'https://olimacjuan.github.io',
  base: '/Portafolio',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
    shikiConfig: { theme: 'github-light' },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: 'html', strict: false }], rehypeMermaid],
    }),
  },
  vite: { plugins: [tailwindcss()] },
});
