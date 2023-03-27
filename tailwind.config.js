/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'poppins-regular':['poppins-regular'],
       'poppins-medium' :['poppins-medium'],
       'poppins-semibold':['poppins-semibold'],
       'poppins-bold':['poppins-bold'],
       'poppins-light':['poppins-light']
      },
      colors:{
        primary: '#5B33A8',
        grayBg: '#F5F5F5',
        grayHover: '#F3F4F6',
        grayText: '#667085',
        grayActive: '#F3F4F6',
        blackText: '#3B3D40',
        blueText: '#7743DB',
      }
    },
  },
  plugins: [],
};
