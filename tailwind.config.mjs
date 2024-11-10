/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				text: {
					light: '#1e060a',
					dark: '#f9e1e5'
				},
				background: {
					light: '#f8dde0',
					dark: '#181f2a'
				},
				primary: {
					light: '#83161f',
					dark: '#e97c85'
				},
				secondary: {
					light: '#d7939e',
					dark: '#6c2833'
				},
				accent: {
					light: '#d85f73',
					dark: '#a0273b'
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
