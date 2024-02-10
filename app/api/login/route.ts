import db from '@/database-stuff'
import { users } from '@/database-stuff/users'
import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import * as jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
	const { email, username } = await request.json()

	const User = await db.query.users.findFirst({
		where: eq(users.email, email),
	})

	if (!User) {
		return new NextResponse(
			'We could not find your account, try signing up',
			{ status: 500 }
		)
	}

	const payload = { username: User.username }
	const secretKey = process.env.AUTH_SECRET as string
	const options = { expiresIn: '7h' }
    const token = jwt.sign(payload, secretKey, options)

    return NextResponse.json({token, User})

	// Check db if we have that username already.
	// If the username is present then we know this user and want to send him a log-in link.

	// TAKE THESE STEPS
	// create payload which will contain the user's details.
	// Generate the token and append it to the email link as a query param

	// /api/signInEmailLink?token=['Token'] --> This route redirects to the home page and saves the tokens to cookies.

	// If the username is not present return an error response and get the user to sign up instead
}
