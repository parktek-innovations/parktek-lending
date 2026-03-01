/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "#1E40AF",
          subtle: "#EFF6FF",
          subtleBorder: "#BFDBFE",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
          soft: "#EFF6FF",
          softBorder: "#BFDBFE",
        },
        ink: {
          DEFAULT: "#0B0F14",
          muted: "#475569",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#F8FAFC",
          muted: "#F1F5F9",
        },
        line: {
          DEFAULT: "#E2E8F0",
        },
        status: {
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#DC2626",
          info: "#0EA5E9",
        },
        teal: {
          highlight: "#06B6D4",
          subtle: "#ECFEFF",
        },
      },
      borderRadius: {
        lg: "0.9rem",
        md: "calc(0.9rem - 2px)",
        sm: "calc(0.9rem - 4px)",
      },
      boxShadow: {
        panel: "0 16px 36px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(226,232,240,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.45) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-soft": "24px 24px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s ease-out both",
      },
    },
  },
  plugins: [],
};
