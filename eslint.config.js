const { defineConfig } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const globals = require('globals');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	...compat.extends(
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	),
	{
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
			react,
		},
		settings: {
			react: { version: 'detect' },
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'warn',
			'react/prop-types': 'off',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
		},
	},
	{
		files: ['eslint.config.js', 'metro.config.js', 'remove_console*.js', 'remove_console*.ts'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
]);
