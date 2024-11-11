/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				text: {
					light: 'rgb(var(--text-light))',
					dark: 'rgb(var(--text-dark))'
				},
				background: {
					light: 'rgb(var(--background-light))',
					dark: 'rgb(var(--background-dark))'
				},
				primary: {
					light: 'rgb(var(--primary-light))',
					dark: 'rgb(var(--primary-dark))'
				},
				secondary: {
					light: 'rgb(var(--secondary-light))',
					dark: 'rgb(var(--secondary-dark))'
				},
				accent: {
					light: 'rgb(var(--accent-light))',
					dark: 'rgb(var(--accent-dark))'
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
