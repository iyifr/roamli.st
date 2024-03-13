import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const pins = sqliteTable('pins', {
	id: text('id').primaryKey(),
	name: text('name'),
	description: text('desc'),
	longitude: integer('long'),
	latitude: integer('lat'),
	city: text('id'),
})
