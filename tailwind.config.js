/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: (theme) => ({
        'bg-video': 'url(../images./explainer-video.mp4)',
      }),
      backgroundSize: {
        'bg-video': 'cover',
      },
      backgroundPosition: {
        'bg-video': 'center',
      },
      backgroundRepeat: {
        'bg-video': 'no-repeat',
      },
      position: {
        'bg-video': 'relative',
      },
      width: {
        'video': '100%',
      },
      height: {
        'video': '100%',
      },
      objectFit: {
        'video': 'cover',
      },
      top: {
        'video': '0',
      },
      left: {
        'video': '0',
      },
      position: {
        'video': 'absolute',
      },

      
      screens: {
        'sm': '480px',
      },
      hidden: {
        'sm': {
          display: 'none',
        },
      },
      
      colors: {
        "bgMain": '#24374e',
        "bgSecondary": '#2bae76'
      },
      fontFamily: {
        Jakarta: ['Plus Jakarta Sans'],
      }
    },
  },
  plugins: [],
}
