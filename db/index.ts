import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { users } from './users'
import { otps } from './otp'
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle'
import userSessions from './user-session'

const client = createClient({
	url: process.env.DATABASE_URL as string,
	authToken: process.env.DATABASE_AUTH_TOKEN,
})

const db = drizzle(client, { schema: { users, otps, userSessions } })
export const adapter = new DrizzleSQLiteAdapter(db, userSessions, users)

export default db
