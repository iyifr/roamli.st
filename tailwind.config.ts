import type { Config } from 'tailwindcss'

const config = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				header: ['var(--font-header)'],
			},

			colors: {
				slate: {
					1: 'var(--slate-1)',
					2: 'var(--slate-2)',
					3: 'var(--slate-3)',
					4: 'var(--slate-4)',
					5: 'var(--slate-5)',
					6: 'var(--slate-6)',
					7: 'var(--slate-7)',
					8: 'var(--slate-8)',
					9: 'var(--slate-9)',
					10: 'var(--slate-10)',
					11: 'var(--slate-11)',
					12: 'var(--slate-12)',
					100: 'var(--slate-12)',
					300: 'var(--slate-7)',
					200: 'var(--slate-6)',
					400: 'var(--slate-11)',
					800: 'var(--slate-6)',
					950: 'var(--slate-2)',
				},
				background: 'var(--slate-1)',
				foreground: 'var(--slate-12)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
