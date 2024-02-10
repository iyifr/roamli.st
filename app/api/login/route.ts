import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const {email, username} = await request.json()

    // Check db if we have that username already. 
    // If the username is present then we know this user and want to send him a log-in link. 

    // TAKE THESE STEPS
    // create payload which will contain the user's details.
    // Generate the token and append it to the email link as a query param

    // /api/signInEmailLink?token=['Token']

}