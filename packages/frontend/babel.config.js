module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    ['relay', { artifactDirectory: '__generated__' }],
  ],
};
