import { defineConfig } from 'vitepress'

export default defineConfig({
  rewrites: {
    'packages/:package/src/:splat*': '-/:package/:splat*',
    'docs/:splat*': ':splat*'
  }
})
