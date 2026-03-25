/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        parktek: {
          cream: "#fafaf7",
          paper: "#ffffff",
          ink: "#0a0e1a",
          muted: "#5a6580",
          line: "#e6e6df",
          yellow: "#dacf00",
          olive: "#121100"
        }
      },
      fontFamily: {
        clash: [
          "\"Clash Display\"",
          "sans-serif"
        ],
        montserrat: [
          "Montserrat",
          "sans-serif"
        ],
        syne: [
          "Syne",
          "sans-serif"
        ]
      },
      boxShadow: {
        card: "0 24px 80px rgba(12, 15, 25, 0.08)"
      },
      borderRadius: {
        shell: "100px"
      }
    }
  },
  plugins: []
};
