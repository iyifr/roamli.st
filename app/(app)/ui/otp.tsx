import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signUpStore } from "./signup";
import axios from "axios";


export default function OTP() {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')
    const { email, username } = signUpStore()

    const handleSubmit = async () => {
        try {
            setLoading(true)
            await axios.post('/api/validate-otp', { email, username, OTP: value, intent: 'signup' })
        }
        catch (e) {
            throw Error(e as unknown as any)
        }
        finally {
            setLoading(false)
        }
    }


    return <span className="flex flex-col gap-3">
        <p className="text-foreground opacity-70">Check your email inbox, don't see it ?.. Check your spam folder</p>
        <Label className="text-foreground text-sm mt-3">One-time Code*</Label>
        <Input placeholder="****" className="ml-0.5" onChange={(e) => setValue(e.target.value)} />

        <Button onClick={handleSubmit} loading={loading} loadingText="Please wait.." type="submit" className="dark:bg-slate-3 shadow-xl dark:text-foreground w-full mt-2 hover:dark:bg-slate-4" size={"sm"}>
            Proceed
        </Button>
    </span>
}
// export default function OTP() {
//     const [otp, setOtp] = useState<(number | null)[]>([1, 2, 3, 4])
//     const input = useRef([])

//     const handleSetValue = (index: number, value: number) => {
//         const arrIndex = index - 1
//         const currState = otp
//         currState[arrIndex] = value
//     }
//     return <span className="flex flex-row gap-4 my-12">
//         {
//             otp.map((i) => (
//                 /* @ts-ignore */
//                 <Input className="rounded-xl inline-flex pl-3.5 w-[2.5rem]" maxLength={1} />
//             ))
//         }
//     </span>
// }

// const OTPInput = ({ value, handleKeyDown, handleKeyUp, onFocus, index, ref}: any) => {
//     return <Input
//         key={index}
//         type="text"
//         className="rounded-xl inline-flex pl-3.5 w-[2.5rem]"
//         maxLength={1}
//         />
// }   