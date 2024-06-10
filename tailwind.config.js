/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				text: {
					50: '#120808',
					100: '#240f11',
					200: '#471f22',
					300: '#6b2e33',
					400: '#8f3d44',
					500: '#b34d55',
					600: '#c27077',
					700: '#d19499',
					800: '#e0b8bb',
					900: '#f0dbdd',
					950: '#f7edee'
				},
				background: {
					50: '#130707',
					100: '#250e0e',
					200: '#4b1b1b',
					300: '#702929',
					400: '#963636',
					500: '#bb4444',
					600: '#c96969',
					700: '#d68f8f',
					800: '#e4b4b4',
					900: '#f1dada',
					950: '#f8ecec'
				},
				primary: {
					50: '#160405',
					100: '#2c070a',
					200: '#570f15',
					300: '#83161f',
					400: '#AA1D29',
					500: '#da2534',
					600: '#e1515d',
					700: '#e97c85',
					800: '#f0a8ae',
					900: '#f8d3d6',
					950: '#fbe9eb'
				},

				futa: {
					twins: '#FEE440',
					white: '#d5dce7',
					red: '#c0212e'
				},
				ysn: {
					black: '#181f2a',
					blue: '#8DCDF1',
					pink: '#D067A8',
					orange: '#F89F63',
					purple: '#9654A1'
				},

				ac: {
					green: {
						soft: '#B0DED3',
						mid: '#8BCFBB',
						hard: '#73C7AA'
					},
					pink: '#F1A3C7'
				}
			}
		},
		fontSize: {
			sm: '0.889rem',
			base: '1rem',
			xl: '1.125rem',
			'2xl': '1.266rem',
			'3xl': '1.424rem',
			'4xl': '1.602rem',
			'5xl': '1.802rem'
		},
		fontFamily: {
			heading: 'Poppins',
			body: 'Onest'
		},
		fontWeight: {
			normal: '400',
			bold: '700'
		}
	},
	plugins: []
};
