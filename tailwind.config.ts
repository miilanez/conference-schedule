import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1480px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero/background.jpg')",
        timer: "url('/images/timer/bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
