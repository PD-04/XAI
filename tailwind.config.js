/**
 * Tailwind CSS configuration for Medical Theme
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4B8C94', // Primary color set to a teal shade representing professionalism
        secondary: '#FFC107', // Secondary color set to a yellow shade for energy
        accent: '#FF5722', // Accent color for alerts and important notices
        background: '#F9FAFB', // Light background for a clean look
        text: {
          primary: '#212529', // Default text color for readability
          secondary: '#6c757d', // Secondary text color for less important text
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Readable font for a medical app
        serif: ['Merriweather', 'serif'], // Serif font for headings
      },
    },
  },
  variants: {},
  plugins: [],
};