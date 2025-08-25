import { defineConfig } from 'astro/config'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://shidari.github.io/my-portfolio/',
  base: '/my-portfolio/',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})