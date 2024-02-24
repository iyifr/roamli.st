import { Config, defineConfig, defineGlobalStyles } from '@pandacss/dev'
import radixColorsPreset from 'pandacss-preset-radix-colors'
import { Bayon_Font } from './app/layout'
import { Bayon } from 'next/font/google'

export default defineConfig({
	preflight: true,
	include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
	exclude: [],
	outdir: 'styled-system',
	presets: [
		radixColorsPreset({
			darkMode: true,
			colorScales: ['slate', 'indigo'],
		}),
	],
	lightningcss: true,
})

const theme: Pick<Config, 'theme'>['theme'] = {}
