import { defineConfig } from 'vitepress'
import catalogue from '../catalogue'

export default defineConfig({
  title: '落秋cc',
  description: '落秋cc的博客',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: catalogue[0].link },
    ],

    sidebar: [
      {
        text: '博客',
        items: catalogue,
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/luoqiucc' }],
  },
})
