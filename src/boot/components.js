import { boot } from 'quasar/wrappers'

const components = {
  'post': require('components/post/Post').default,
  'post-options': require('components/post/PostOptions').default,
  'post-card': require('components/post/PostCard').default,
  'page-header': require('components/PageHeader').default
}

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  for (const key in components) {
    app.component(key, components[key])
  }
})
