import {
	Config,
	defineConfig,
	defineGlobalStyles,
} from '@pandacss/dev'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		'./components/**/*.{ts,tsx,js,jsx}',
		'./app/**/*.{ts,tsx,js,jsx}',
	],

	// Files to exclude
	exclude: [],

	// The output directory for your css system
	outdir: 'styled-system',
})

const theme: Pick<Config, 'theme'>['theme'] = {}
