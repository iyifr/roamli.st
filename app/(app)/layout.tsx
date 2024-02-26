import AppHeader from "./ui/app-header";

export default function Layout({ children, auth }: { children: React.ReactNode, auth: React.ReactNode }) {
    return <main className="max-w-5xl mx-auto">
        <AppHeader />
        {children}
        {auth}
    </main>
}