import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Custom breakpoints for better tablet/iPad support
        'tablet': '768px',
        'tablet-lg': '1024px',
        'ipad': '820px',
        'ipad-pro': '1024px',
      },
      colors: {
        navy: '#4A6B8A', // Lighter shade of #1F3855
        'navy-dark': '#174FA4', // Updated blue color
        'navy-dark-dark': '#1e3a5f', // Darker shade for text
        'navy-light': '#7A9BB8', // Even lighter shade
        teal: '#4A6B8A',
        'light-blue': '#174FA4', // Changed to navy-dark
        gray: '#6C757D',
        gold: '#FFD700', // For hover effects
      },
      fontFamily: {
        'heading': ['Poppins', 'Arial', 'sans-serif'],
        'body': ['Inter', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4A6B8A, #174FA4)',
      },
      maxWidth: {
        'container': '1200px',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
      },
      spacing: {
        '15': '3.75rem', // 60px
        '18': '4.5rem',
        '20': '5rem', // 80px
        '25': '6.25rem', // 100px
        '88': '22rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
export default config
