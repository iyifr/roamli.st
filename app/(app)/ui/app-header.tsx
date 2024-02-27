'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AppHeader = () => {
    const activeRoute = usePathname()
    const isLinkActive = (route: string) => route === activeRoute ? "true" : "false"


    return <div className="flex-row max-w-lg mx-auto py-6 gap-12 font-header text-2xl hidden md:flex">
        <Link href={"/"}
            data-active={isLinkActive("/")}
            className="data-[active=false]:opacity-60 hover:bg-slate-4 px-5 py-3 rounded-full inline-flex items-center">For you
        </Link>

        <Link
            href={"/explore"}
            data-active={isLinkActive("/explore")}
            className="hover:opacity-100 data-[active=false]:opacity-70 hover:bg-slate-4 px-5 py-3 rounded-full inline-flex items-center">
            Explore
        </Link>


        <Link
            href={"/explore"}
            data-active={isLinkActive("/explore")}
            className="hover:opacity-100 data-[active=false]:opacity-70 hover:bg-slate-4 px-5 py-3 rounded-full inline-flex items-center">
            MY Roamlist
        </Link>
    </div>
}

export default AppHeader