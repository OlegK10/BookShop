/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        def: ['Urbanist', 'sans-serif'],
        cus: ["Julius Sans One", 'sans-serif']
      },
      height: {
        p: '90vh',
        p22: '22vh',
        p37: '37vh',
        p45: '45vh',
        p55: '55vh',
        p75: '75vh',
      },
      width: {
        p22: '22vh',
        per24: "24%",
        per48: "48%",
      },
      letterSpacing: {
        "10": "0.5em",
      },
      colors: {
        "l1": "white",
        "l2": "#F9F9F9",
        "d1": "black",
        "od1": "rgba(0,0,0,.7)",
        "od2": "rgba(0,0,0,.5)",
        "ol1": "rgba(255,255,255,.7)",
        "ol2": "rgba(255,255,255,.3)",
        "m": "#D1CC5A",
      },
      margin: {
        "p26": "26rem",
      },
      borderWidth: {
        "1": "1px",
      },
      boxShadow: {
        "1": " 0px 0px 1px 1px rgba(1,1,1,.2)"
      },

    },
  },
  plugins: [],
}

