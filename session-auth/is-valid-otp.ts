import db from '@/database'
import { otps } from '@/database/otp'
import { users } from '@/database/users'
import { eq } from 'drizzle-orm'
import { User } from 'lucia'
import { isWithinExpirationDate } from 'oslo'

export default async function isValidOTP(user: User, code: string) {
	await db.transaction(async (tx) => {
		const dbCode = await tx.query.otps.findFirst({ where: eq(otps.userId, user.id) })
		if (!dbCode || dbCode.code !== code) {
			tx.rollback()
			return false
		}

		await tx.delete(otps).where(eq(otps.id, dbCode.id))
		if (!isWithinExpirationDate(dbCode.expiresAt!)) {
			return false
		}
		if (dbCode.email !== user.email) {
			return false
		}
		return true
	})
}
