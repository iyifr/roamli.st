import db from '@/database'
import { otps } from '@/database/otp'
import { eq } from 'drizzle-orm'
import { TimeSpan, createDate } from 'oslo'
import { generateRandomString, alphabet } from 'oslo/crypto'

export default async function generateOTP(userId: string, email: string): Promise<string> {
	await db.delete(otps).where(eq(otps.userId, userId))
	const code = generateRandomString(4, alphabet('0-9'))
	const date = createDate(new TimeSpan(60, 'm'))
	await db.insert(otps).values({ userId, email, code: code, expiresAt: date })
	return code
}
