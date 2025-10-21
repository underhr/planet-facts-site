/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
      },
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
