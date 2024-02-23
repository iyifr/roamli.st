import { sql } from 'drizzle-orm'
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

const users = sqliteTable('users', {
	id: text('id').notNull().primaryKey(),
	firstName: text('name'),
	username: text('username').notNull().unique(),
	email: text('email').unique().unique(),
})

export { users }
