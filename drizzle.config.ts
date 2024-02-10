import { Config } from 'drizzle-kit'
import { loadEnvConfig } from '@next/env'
import { cwd } from 'node:process'

loadEnvConfig(cwd())

export default {
	schema: './database-stuff',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
} satisfies Config
