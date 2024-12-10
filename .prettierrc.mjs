/** @type {import("prettier").Config} */

export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss'
		//'prettier-plugin-svelte'
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
		/*{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}*/
	]
};
