import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        muted: "#5d6a66",
        paper: "#fbfaf7",
        mist: "#eef2ef",
        line: "#dde4df",
        teal: "#0f8f82",
        pine: "#0b3d38",
        gold: "#b98b4b"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 33, 31, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
