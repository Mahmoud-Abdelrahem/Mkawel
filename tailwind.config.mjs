/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-425': '425px', // Add custom 425px breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        vt323: "var(--font-vt323)",
        permanent: "var(--font-permanent-marker)",
        orkney: "var(--font-orkney)",
      },
    },
  },
  plugins: [],
};
