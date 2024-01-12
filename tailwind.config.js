/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "800px": {
          "max":"800px"
        },
        "770px": {
          "max":"770px"
        },
        "690px": {
          "max":"690px"
        },
        "640px": {
          "max":"640px"
        },
        "600px": {
          "max":"600px"
        },
        "550px": {
          "max":"550px"
        },
        "510px": {
          "max":"510px"
        },
        "480px": {
          "max":"480px"
        }
      },
      colors: {
        "dark": "#1b1b1b",
        "dark-100": "#272727",
        "main": "#E43E3E",
        "rust": "#cd412b"
      }
    },
  },
  plugins: [],
}