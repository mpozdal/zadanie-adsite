/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1080px',
				xl: '1440px',
			},
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive'],
				'roboto-flex': ['"Roboto Flex"'],
				'roboto-condensed': ['"Roboto Condensed"'],
				'bebas-neue': ['"Bebas Neue"'],
			},
			listStyleType: {
				none: 'none',
				disc: 'disc',
				decimal: 'decimal',
				square: 'square',
				roman: 'upper-roman',
			},
			colors: {
				grey: '#DCDCDC',
				button: '#0147FF',
				primary: '#F7f7f7',
				secondary: '#282828',
			},
		},
	},
	plugins: [],
};
