module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
       sora:["Sora"],
    },
    extend: {
      boxShadow:{
        "md":"6px 6px 16px 0 rgba(0,0,0,0.25),-4px -4px 12px 0 rgba(255,255,0.3);"
      }
    },
  },
  plugins: [],
}
