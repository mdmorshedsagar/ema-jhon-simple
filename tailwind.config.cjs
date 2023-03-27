/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1C2B35",
        
"secondary": "#FFE0B3",
        
"accent": "#5132ad",
        
"neutral": "#151D23",
        
"base-100": "#FFFFFF",
        
"info": "#529BE0",
        
"success": "#50E2B6",
        
"warning": "#F5C538",
        
"error": "#F6232D",
        },
      },
    ],
  },
  plugins: [require("daisyui")]

}
