import { css } from "@/styled-system/css";
import AppHeader from "./components/app-header";
import './global.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className={css({ maxWidth: '72rem', mx: 'auto', pt: 24, })}>
        <AppHeader />
        {children}
    </main>
}