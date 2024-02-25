import db from '@/database'
import { otps } from '@/database/otp'
import userSessions from '@/database/user-session'
import { users } from '@/database/users'
import { lucia } from '@/session-auth'
import { eq } from 'drizzle-orm'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const { OTP, username, email, intent } = await request.json()

	const isValidOTP = await db.query.otps.findFirst({
		where: eq(otps.value, OTP),
	})

	const existingUser = await db.query.users.findFirst({ where: eq(users.username, username) })
	if (isValidOTP) {
		await db.delete(otps).where(eq(otps.value, OTP))

		if (intent === 'signup') {
			// Add new user to db
			const userId = generateId(15)
			const User = await db
				.insert(users)
				.values({ id: userId, email, username })
				.returning({ id: users.id })

			// Create new session for new user
			const session = await lucia.createSession(User[0].id, {})
			const sessionCookie = lucia.createSessionCookie(session.id)
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
			return redirect('/')
		}
		if (intent === 'login' && existingUser) {
			// Create session
			const session = await lucia.createSession(existingUser.id, {})
			const sessionCookie = lucia.createSessionCookie(session.id)
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
			return redirect('/')
		}
	}

	return new NextResponse('Wrong OTP')
}
