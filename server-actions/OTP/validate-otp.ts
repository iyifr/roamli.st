'use server'

import db from '@/db'
import { otps } from '@/db/otp'
import { users } from '@/db/users'
import { eq } from 'drizzle-orm'
import * as jwt from 'jsonwebtoken'

type User = {
	id: string
	name: string | null
	username: string
	email: string | null
}

export async function ValidateOTP(OTP: string, User: User) {
	const isValidOTP = await db.query.otps.findFirst({
		where: eq(otps.value, OTP),
	})

	if (isValidOTP) {
		// delete the OTP
		await db.delete(otps).where(eq(otps.value, OTP))

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
