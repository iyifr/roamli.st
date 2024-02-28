import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import axios from 'axios'
import { create } from "zustand";

export default function Signup({ setOtpSent }: { setOtpSent: Dispatch<SetStateAction<boolean>> }) {
    const { email, username, handleChange } = signUpStore()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post('/api/signup', { email, username })
            res.statusText === 'Sent OTP' ? setOtpSent(true) : null
        }
        catch (e) {
            setLoading(false)
            throw new Error(e as unknown as any)
        }
    }
    return <div className="w-full">
        <p className="text-foreground opacity-80 my-2">This is exciting, for the both of us :)</p>

        <form onSubmit={handleSubmit}>
            <span className="my-8 flex flex-col ">
                <Label htmlFor="username" className="text-semibold text-foreground mb-2">Username*</Label>
                <Input type="text"
                    placeholder="iyifr"
                    id="username"
                    className="dark:bg-slate-4 placeholder:opacity-50 border-none"
                    onChange={(e) => handleChange("username", e.target.value)} />
            </span>


            <span className="mt-6 mb-6 flex flex-col">
                <Label htmlFor="email" className="text-semibold text-foreground mb-2">Email Address*</Label>
                <Input
                    type="email"
                    placeholder="gangoverluv@gang.com"
                    id="email" className="dark:bg-slate-4 placeholder:opacity-50 border-none"
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </span>

            <Button loading={loading} loadingText="Signing you up" type="submit" className="dark:bg-slate-3 shadow-xl dark:text-foreground w-full mt-2 hover:dark:bg-slate-4" size={"sm"}>
                Sign up
            </Button>

        </form>
    </div>
}

type State = {
    username: string,
    email: string,
}

type Actions = {
    handleChange: (field: 'username' | 'email', value: string) => void
}

export const signUpStore = create<State & Actions>((set) => ({
    username: '',
    email: '',
    handleChange: (field, value) => {
        if (field === 'username') {
            set(() => ({ username: value }))
        }
        if (field === 'email') {
            set(() => ({ email: value }))
        }
    }
}))
