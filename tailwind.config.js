/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1537px',
        '3xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        primary:{
              50: "#e6e9eb",    
              100: "#b0bcc1",
              200: "#8a9ca3",
              300: "#556e79",
              400: "#34525f",
              500: "#012737",
              600: "#012332",
              700: "#011c27",
              800: "#01151e",
              900: "#001017",
            },
        secondary:{
              50: "#fff4eb",    
              100: "#fedec0",
              200: "#fecea1",
              300: "#feb776",
              400: "#fda95c",
              500: "#fd9433",
              600: "#e6872e",
              700: "#b46924",
              800: "#8b511c",
              900: "#6a3e15",
            },
        n:{
              50: "#f1f4f5",    
              100: "#d4dce0",
              200: "#bfcbd1",
              300: "#a2b3bd",
              400: "#90a4b0",
              500: "#748d9c",
              600: "#6a808e",
              700: "#52646f",
              800: "#404e56",
              900: "#313b42",
            },
        }
      }
    },
  plugins: [],
}

