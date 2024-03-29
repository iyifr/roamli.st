import { lucia } from "@/session-auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ActionResult } from "next/dist/server/app-render/types";
import { validateRequest } from "@/session-auth/validate-request";
import { Button } from "@/components/ui/button";

export default async function LogoutButton() {
    return (
        <form action={logout}>
            <Button>Sign out</Button>
        </form>
    );
}

async function logout(): Promise<ActionResult> {
    "use server";
    const { session } = await validateRequest();
    if (!session) {
        return {
            error: "Unauthorized"
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/login");
}