'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const AppHeader = () => {
    const activeRoute = usePathname()
    const isLinkActive = (route: string) => route === activeRoute ? "true" : null


    return <div >
        <Link href={"/"} data-active={isLinkActive("/")}>For you</Link>
        <Link href={"/explore"} data-active={isLinkActive("/explore")}>Explore</Link>
    </div>
}

export default AppHeader