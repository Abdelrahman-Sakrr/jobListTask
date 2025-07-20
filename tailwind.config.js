/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 52%, 96%)",
        secondry: "hsl(180, 29%, 50%)",
        alternative: "hsl(180, 14%, 20%)",
        customGray: "hsl(180, 8%, 52%)",
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
