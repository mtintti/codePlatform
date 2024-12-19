/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //sans: ['Inter', 'sans-serif'],
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      // start new
      animation: {
        autoRun: 'autoRun 10s linear infinite',
        autoRunLast: 'autoRun 12s linear infinite',
        autoRunRight: 'autoRunRight 10s linear infinite',
      },
      keyframes: {
        autoRun: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        autoRunRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        autoRunLast: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      maskImage: {
        'mask-gradient-to-r': 'linear-gradient(to right, transparent, #000, transparent)',
      },
      // start end keyframes
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-play-state-paused': {
          animationPlayState: 'paused !important',
        },
      }, ['hover']);
    },
  ],
};
