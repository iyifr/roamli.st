'use server'

import db from '@/database-stuff'
import { otps } from '@/database-stuff/otp'
import { users } from '@/database-stuff/users'
import { eq } from 'drizzle-orm'
import * as jwt from 'jsonwebtoken'

type User = {
	id: string
	name: string | null
	username: string
	email: string | null
	verified: boolean | null
}

export async function ValidateOTP(OTP: string, User: User) {
	const isValidOTP = await db.query.otps.findFirst({
		where: eq(otps.value, OTP),
	})

	if (isValidOTP) {
		// delete the OTP
		await db.delete(otps).where(eq(otps.value, OTP))

		// update the user status
		await db
			.update(users)
			.set({ verified: true })
			.where(eq(users.email, User.email as string))

		const payload = { user: User }
		const secretKey = process.env.AUTH_SECRET as string
		const options = { expiresIn: '135d' }
		const token = jwt.sign(payload, secretKey, options)
		return { token, error: null }
	} else {
		return { token: null, error: true }
	}
}

export async function expireOTP(OTP: string) {
	await db.delete(otps).where(eq(otps.value, OTP))
	return 'OTP deleted'
}
