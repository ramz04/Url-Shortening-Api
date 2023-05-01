/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: "8rem",
    },
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)"
      },
      fontSize:{
        base: "18px",
      },
      fontFamily:{
        'poppins': ["Poppins", "sans serif"]
      },
      backgroundImage:{
        "designmobile": 'url("./src/assets/images/bg-shorten-mobile.svg")',
        "design": 'url("./src/assets/images/bg-shorten-desktop.svg")',
      }
    },
  },
  plugins: [],
}

