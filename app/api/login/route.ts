import db from '@/database-stuff'
import { users } from '@/database-stuff/users'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import LoopsClient from 'loops'
import { otps } from '@/database-stuff/otp'

export async function POST(request: NextRequest) {
	const { email } = await request.json()
	const Loops = new LoopsClient(process.env.LOOPS_API_KEY as string)

	const User = await db.query.users.findFirst({
		where: eq(users.email, email),
	})

	if (!User) {
		return new NextResponse(
			'We could not find your account, try signing up',
			{ status: 500, statusText: 'Account does not exist' }
		)
	}

	// Generate OTP
	const OTP = getRandomToken(4)

	// Add OTP to db for future reference
	await db.insert(otps).values({ value: OTP })

	// dataVariables for LOOPS to send OTP email
	const dataVariables = {
		name: User.name as string,
		otp: OTP,
	}

	const resp = await Loops.sendTransactionalEmail(
		'clsfeuwty005bzzja0t0qcahn',
		User.email as string,
		dataVariables
	)

	return resp.success
		? NextResponse.json({ message: 'OTP sent successfully', User })
		: new NextResponse(`Failed to send OTP`, {
				status: 500,
				statusText: 'Error sending OTP',
		  })
}

export function getRandomToken(len: number): string {
	return Math.random().toString(36).substr(2, len)
}
