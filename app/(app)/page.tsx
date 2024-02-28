import { validateRequest } from "@/session-auth/validate-request"
import { Bayon_Font } from "../layout"
import { Button } from "@/components/ui/button"
import useAuthStore from "./@auth/store"
import Link from "next/link"



export default async function Page() {
  const { user } = await validateRequest()
  return <div>
    <p >Hello world</p>
    <h2>Hello world</h2>
    {user?.email}
    <Link href={"/signup"}>Go</Link>
  </div>
}