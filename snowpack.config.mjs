/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  env: {},
  mount: {
    src: '/'
  },
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        'input': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      }
    ]
  ],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 5000
  },
  buildOptions: {
    /* ... */
  },
}
