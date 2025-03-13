/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Amorr-PreLaunch/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
        "couple": "url('/assets/pixelcut-export 2.png')",
        "amorr":"url('/assets/pexels-claudio-siracusano-303345605-13400080 3.png')",
      },
      colors: {
        grayPrimary: "#202020",
        lightGrayPrimary: "#3b3737",
        greenPrimary: "#87DB1C",
        textGrayPrimary: "#F9FCFB70",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE 10+ */
          'scrollbar-width': 'none',    /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
