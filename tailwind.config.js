module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '8xl': '7rem',
                '9xl': '7.5rem',
                '10xl': '8rem',
            },
            fontFamily: {
                montserrat: ['Montserrat'],
                'abhaya-libre': ['Abhaya Libre'],
                'alegraya-sans': ['Alegreya Sans'],
            },
            letterSpacing: {
                widest: '.25em',
            },
        },
    },
    plugins: [],
}
