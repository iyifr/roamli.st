import { validateRequest } from "@/session-auth/validate-request";
import AppHeader from "./ui/app-header";

export default async function Layout({ children, auth }: { children: React.ReactNode, auth: React.ReactNode }) {
    const { user } = await validateRequest()
    return <main className="max-w-5xl mx-auto">
        <AppHeader />
        {children}
        {auth}
    </main>
}