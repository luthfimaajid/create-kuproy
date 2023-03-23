/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray-1': '#D5D9DD',
        'custom-gray-3' : '#E3E3E3',
        'custom-green-1':'#07A072',
        'custom-red-1':'#D94343',
        'custom-white-1':'#F4F4F4',
        'custom-green-2':'#07543D',
        'custom-orange-1':'#F36B30',
        'custom-gray-5':'#EEF0F6',
      },
      colors: {
        'custom-gray-2': '#58625A',
        'custom-gray-4': '#4D4747',
      },
      borderRadius: {
        '40':'40px',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '13':'13px',
      },
      maxWidth: {
        'w1': '45rem',
        'w2': '50rem',
      }
    },
  },
  plugins: [],
}