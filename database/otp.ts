import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const otps = sqliteTable('otps', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	code: text('code'),
	userId: text('user_id'),
	email: text('email'),
	expiresAt: integer('expires_at', { mode: 'timestamp' }),
})
