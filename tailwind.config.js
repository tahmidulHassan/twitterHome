module.exports = {
  purge: {
    enabled: true,
    layers: ["base","components", "utilities"],
    content: ['./**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        segoey: ['Segoe UI Variable Static Text', 'sans-serif'],
    },

    screens: {
      'twitter': '1280px',
      'mobile': {'min': '320px', 'max': '499px'},
      'tablet': {'min': '500px', 'max': '1004px'},
      'laptop': {'min': '1005px', 'max': '1279px'}, 
      'desktop': {'min': '1280px'},
    },

    colors: {
      primary:{
        blue: '#1DA1F2',
        darkblue: '#2795D9',
        lightblue: '#8ECDF7',
        bgblue: '#EFF9FF',
      },
      secondary: {
        darkest: '#0F1419',
        darker : '#3D474F',
        dark: '#657786',
        lightest: '#F7F9F9',
        lighter: '#EFF3F4',
        light: '#E7E7E8',
      }
    }

    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
