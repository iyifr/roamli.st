import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { users } from './users'

const sessions = sqliteTable('user-sessions', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	expiresAt: integer('expires_at').notNull(),
})

export default sessions
