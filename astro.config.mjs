// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://luoqiucc.github.io/',

  server: {
    port: 4321,
    host: true,
  },

  integrations: [mdx()],
})
