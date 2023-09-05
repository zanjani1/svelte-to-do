const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-node');

module.exports = {
  preprocess: preprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    }
  }
};