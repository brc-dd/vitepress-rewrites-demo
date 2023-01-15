import { defineConfig } from 'vitepress'

export default defineConfig({
  remap: {
    'packages/package-b/src/index.md': '-/package-b/index.md',
    'packages/package-b/src/config.md': '-/package-b/config.md',
    'packages/package-a/src/index.md': '-/package-a/index.md',
    'packages/package-a/src/config.md': '-/package-a/config.md',
    'docs/index.md': 'index.md',
    'docs/globals.md': 'globals.md'
  }
})
