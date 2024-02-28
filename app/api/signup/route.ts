import db from '@/database'
import { otps } from '@/database/otp'
import { users } from '@/database/users'
import { and, eq } from 'drizzle-orm'
import LoopsClient from 'loops'
import { generateId } from 'lucia'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { getRandomToken } from '../login/route'
import generateOTP from '@/session-auth/generate-otp'
import { lucia } from '@/session-auth'

export async function POST(request: NextRequest) {
	const { username, email } = await request.json()
	const Loops = new LoopsClient(process.env.LOOPS_API_KEY as string)

	const User = await db.query.users.findFirst({
		where: eq(users.username, username),
	})

	if (User) {
		return new NextResponse('', {
			status: 500,
			statusText: 'Account with username already exists',
		})
	}

	const userId = generateId(15)
	await db.insert(users).values({ id: userId, email, username, verified: false })

	// Generate OTP
	const OTP = await generateOTP(userId, email)

	// dataVariables for LOOPS to send OTP email
	const dataVariables = {
		name: username,
		otp: OTP,
	}

	const resp = await Loops.sendTransactionalEmail('clsfeuwty005bzzja0t0qcahn', email, dataVariables)
	const session = await lucia.createSession(userId, {})
	const sessionCookie = lucia.createSessionCookie(session.id)

	return resp.success
		? new NextResponse('Sent OTP', {
				status: 200,
				statusText: 'Sent OTP',
				headers: {
					'Set-Cookie': sessionCookie.serialize(),
				},
		  })
		: new NextResponse(`Failed to send OTP`, {
				status: 500,
				// @ts-expect-error
				statusText: `${resp.error.message}`,
		  })
}
