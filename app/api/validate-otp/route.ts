import db from '@/database'
import { otps } from '@/database/otp'
import userSessions from '@/database/user-session'
import { users } from '@/database/users'
import { lucia } from '@/session-auth'
import isValidOTP from '@/session-auth/is-valid-otp'
import { validateRequest } from '@/session-auth/validate-request'
import { eq } from 'drizzle-orm'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const { OTP } = await request.json()

	const { user } = await validateRequest()
	if (!user) {
		return new Response(null, {
			status: 401,
		})
	}

	if (typeof OTP !== 'string') {
		return new Response(null, {
			status: 400,
		})
	}

	const isValid = isValidOTP(user, OTP)

	if (!isValid) {
		return new NextResponse('Wrong OTP', { status: 400, statusText: 'OTP is incorrect' })
	}
	await lucia.invalidateUserSessions(user.id)
	await db.update(users).set({ verified: true }).where(eq(users.id, user.id))

	const session = await lucia.createSession(user.id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': sessionCookie.serialize(),
		},
	})
}
