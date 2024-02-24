import { css } from "@/styled-system/css"
import { Button } from "@radix-ui/themes"
import { Bayon_Font } from "../layout"

const styles = css({
  fontSize: 24,
  mx: 12,
  mt: 5,
})

const buttonStyles = css({
  bg: 'slate.4',
  color: 'indigo.12',
  cursor: 'pointer',
  fontSize: 16,
  px: 24,
  py: 4,
  rounded: '999999px',
  display: 'inline-flex'
})


export default function Page() {
  return <div className={styles}>
    <p className={css({ fontSize: 40, letterSpacing: 1 })}>Hello world</p>
    <h2 className={css({ fontSize: 30, fontFamily: Bayon_Font.style.fontFamily })}>Hello world</h2>
  </div>
}