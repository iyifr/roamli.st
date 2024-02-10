import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	name: text('name'),
	username: text('username').notNull(),
	email: text('email').unique(),
	verified: integer('email_verified', { mode: 'boolean' }),
})

export { users }
