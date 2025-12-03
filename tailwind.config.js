/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Dejamos vacío: no usamos @tailwindcss/forms para evitar errores en Netlify
  ],
};
