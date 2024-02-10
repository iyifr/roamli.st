import { css } from "@/styled-system/css"

export default function Page() {
  const styles = css({
    fontSize: 24,
    color: 'blue.800',
    mx: 12,
    mt: 5,
    letterSpacing: 2
  })


  return <div className={styles}>Hi lol I'm here to stay.</div>
}