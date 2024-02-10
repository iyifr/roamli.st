import {
	Config,
	defineConfig,
	defineGlobalStyles,
} from '@pandacss/dev'

export default defineConfig({
	preflight: true,
	include: [
		'./components/**/*.{ts,tsx,js,jsx}',
		'./app/**/*.{ts,tsx,js,jsx}',
	],
	exclude: [],
	outdir: 'styled-system',
})

const theme: Pick<Config, 'theme'>['theme'] = {}
