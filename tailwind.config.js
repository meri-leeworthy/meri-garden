module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Beastly", "sans-serif"],
      sans: ["WorkSans", "sans-serif"],
      mono: ["Space-Mono", "monospace"]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
