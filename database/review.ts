import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const reviews = sqliteTable('reviews', {
	id: text('id'),
	title: text('title'),
	emotion: text('emotion', {
		enum: ['Happy', 'Sad', 'Angry', 'This is the best thing ever in life.', 'Disappointed'],
	}),
	content: text('content'),
	authorId: text('author_id').notNull(),
    placeId: text('placeId').notNull()
})
