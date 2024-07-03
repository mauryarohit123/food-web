/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
      },
      colors: {
        olive: '#556B2F', // or any olive green color code you prefer
      },
    },
  },
  plugins: [],
}

