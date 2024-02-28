import db from '@/database'
import { users } from '@/database/users'
import { and, eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import LoopsClient from 'loops'
import { otps } from '@/database/otp'
import { redirect } from 'next/navigation'
import generateOTP from '@/session-auth/generate-otp'

export async function POST(request: NextRequest) {
	const { username, email } = await request.json()
	const Loops = new LoopsClient(process.env.LOOPS_API_KEY as string)

	const User = await db.query.users.findFirst({
		where: and(eq(users.email, email), eq(users.username, username)),
	})

	if (!User) {
		return new NextResponse('We could not find your account, try signing up', {
			status: 500,
			statusText: 'Account does not exist',
		})
	}

	// Generate OTP
	const OTP = await generateOTP(User.id, email)


	// dataVariables for LOOPS to send OTP email
	const dataVariables = {
		name: User.firstName ?? (User.username as string),
		otp: OTP,
	}

	const resp = await Loops.sendTransactionalEmail(
		'clsfeuwty005bzzja0t0qcahn',
		User.email as string,
		dataVariables
	)

	return resp.success
		? new NextResponse('OTP sent', { status: 200, statusText: 'OTP sent' })
		:
		  new NextResponse(`Failed to send OTP`, {
				status: 500,
				statusText: 'Error sending OTP',
		  })
}

export function getRandomToken(len: number): string {
	return Math.random().toString(36).substr(2, len)
}
