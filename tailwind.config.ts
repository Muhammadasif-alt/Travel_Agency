import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        arabic: ["var(--font-amiri)", "Amiri", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#13294b", // deep royal navy
          light: "#2563eb", // bright royal-blue accent
          dark: "#0d1d38", // deepest navy (gradients/footer)
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
        },
        gold: "#ffc107",
        coral: "#ff6b35",
        whatsapp: "#25D366",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        // Soft royal-blue (brand) tinted shadows — no harsh black
        sm: "0 1px 3px 0 rgba(37, 99, 235, 0.12)",
        DEFAULT: "0 2px 8px -1px rgba(37, 99, 235, 0.15)",
        md: "0 8px 20px -6px rgba(37, 99, 235, 0.18)",
        lg: "0 14px 30px -10px rgba(37, 99, 235, 0.20)",
        xl: "0 22px 45px -14px rgba(37, 99, 235, 0.22)",
        "2xl": "0 30px 60px -18px rgba(37, 99, 235, 0.25)",
      },
      keyframes: {
        pulseRing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
