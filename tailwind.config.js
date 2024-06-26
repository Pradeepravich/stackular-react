/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'media',
        },
      },
      // other loaders...
    ],
  },
}

