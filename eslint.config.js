import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'.astro/**',
			'dist/**',
			'node_modules/**',
			'public/**',
			'src/env.d.ts'
		]
	},
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: true
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			...tsPlugin.configs.recommended.rules
		}
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				project: true,
				extraFileExtensions: ['.astro']
			}
		}
	},
	prettierConfig
];
