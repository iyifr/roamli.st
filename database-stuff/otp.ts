import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const otps = sqliteTable('otps', {
	value: text('id'),
})
