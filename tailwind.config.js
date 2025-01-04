module.exports = {
  daisyui: {
    themes: [
      {
        pantone: {
          "primary": "#daaa98",   
          "secondary": "#d8a685", 
          "accent": "#0061A8",    // Pantone 286 (Vibrant Blue)
          "neutral": "#A7B6C2",   // Pantone 7542 (Cool Light Gray)
          "base-100": "#FFFFFF",  // Light background for UI
          "base-200": "#F1A800",  // Pantone 130 (Golden Light Yellow)
          "base-300": "#1D2B3D",  // Pantone 433 (Dark Charcoal Gray)
          "info": "#009639",      // Pantone 347 (Fresh Green)
          "success": "#006747",   // Pantone 356 (Earthy Green)
          "warning": "#FFB81C",   // Pantone 123 (Warm Yellow)
          "error": "#E4002B",     // Pantone 186 (Bold Red)
        },
      },
    ],
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind needs to scan these files for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Add DaisyUI here
}