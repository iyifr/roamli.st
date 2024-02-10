import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { users } from './users'
import { otps } from './otp'

const client = createClient({
	url: process.env.DATABASE_URL as string,
	authToken: process.env.DATABASE_AUTH_TOKEN,
})

const db = drizzle(client, { schema: { users, otps } })

export default db
