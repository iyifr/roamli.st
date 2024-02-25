import db from '@/database'
import { otps } from '@/database/otp'
import { users } from '@/database/users'
import { and, eq } from 'drizzle-orm'
import LoopsClient from 'loops'
import { generateId } from 'lucia'
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { getRandomToken } from '../login/route'

export async function GET(request: NextRequest) {
	const { firstName, username, email } = await request.json()
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

	// Generate OTP
	const OTP = getRandomToken(4)

	// Add OTP to db for future reference
	await db.insert(otps).values({ value: OTP })

	// dataVariables for LOOPS to send OTP email
	const dataVariables = {
		name: firstName,
		otp: OTP,
	}

	const resp = await Loops.sendTransactionalEmail('clsfeuwty005bzzja0t0qcahn', email, dataVariables)

	return resp.success
		? redirect('/validate-otp/?intent=signup')
		: new NextResponse(`Failed to send OTP`, {
				status: 500,
				statusText: 'Error sending OTP',
		  })
}
