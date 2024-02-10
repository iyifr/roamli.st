import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const { name, username, email } = await request.json()
}
