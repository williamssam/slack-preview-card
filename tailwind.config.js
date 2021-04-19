module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            mainBg: 'hsl(233, 47%, 7%)',
            cardBg: 'hsl(244, 38%, 16%)',
            accent: 'hsl(277, 64%, 61%)',
            white: 'hsl(0, 0%, 100%)',
            mainParagraph: 'hsla(0, 0%, 100%, 0.75)',
            statHeading: 'hsla(0, 0%, 100%, 0.6)',
         },
         fontFamily: {
            heading: 'Inter, sans-serif',
            paragraph: 'Lexend\\ Deca, sans-serif',
         },
         backgroundImage: {
            desktopImage: "url('./images/image-header-desktop.jpg')",
            mobileImage: "url('./images/image-header-desktop.jpg')",
         },
         height: {
            divHeight: '30vh',
         },
      },
      screens: {
         tablet: { max: '1024px' },
         mobile: { max: '639px' },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
