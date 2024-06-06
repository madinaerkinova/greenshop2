/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "20px",
      screens: {
        lg: "1240px",
      },
    },
    colors: {
      secondary: "#3D3D3D",
      primary: "#46A358",
      white: "#fff",
      dull: "#727272",
      grey: "#A5A5A5",
      "reven-black": "#3D3D3D",
      spinach: "#46A3580F",
    },
  },
  plugins: [],
};
