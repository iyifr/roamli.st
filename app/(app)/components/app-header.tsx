import { css } from "@/styled-system/css"
import Link from "next/link"

const AppHeader = () => {
    const headerStyles = css({

    })

    const LinkDiv = css({
        fontFamily: 'var(--font-header)',
        display: 'flex',
        flexDir: 'row',
        gap: 24,
        alignItems: 'center',
        justifyContent: 'center'
    })

    const LinkStyles = css({
        color: 'slate.12',
        opacity: 50,
        fontSize: 28,
        '&[data-active="true"]': {
            color: 'gray',
            opacity: 20
        }
    })

    return <>
        <div className={LinkDiv}>
            <Link href={"/"} className={LinkStyles}>For you</Link>
            <Link href={"/explore"} className={LinkStyles} data-active="true">Explore</Link>
        </div>
    </>
}

export default AppHeader