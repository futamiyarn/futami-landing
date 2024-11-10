/** @type {import("prettier").Config} */

export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
};
