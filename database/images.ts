import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const images = sqliteTable('images', {
	id: text('id'),
	url: text('id').primaryKey(),
	parentPin: text('parent_entity'),
})
