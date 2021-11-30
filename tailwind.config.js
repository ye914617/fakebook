module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/3.5": "calc(100vh / 3.5)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "screen-80": "80vw",
        "screen-90": "90vw",
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
        "screen/6": "calc(100vw / 6)",
        "screen/7": "calc(100vw / 7)",
        "screen/8": "calc(100vw / 8)",
        "screen/9": "calc(100vw / 9)",
        "screen/10": "calc(100vw / 10)",
        "screen/11": "calc(100vw / 11)",
        "screen/12": "calc(100vw / 12)",
        "screen/13": "calc(100vw / 13)",
        "screen/14": "calc(100vw / 14)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
