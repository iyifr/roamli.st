'use client'

import { useState } from "react"
import Modal from "../../ui/modal"
import OTP from "../../ui/otp"
import Signup from "../../ui/signup"
import useAuthStore from "../store"

export default function Page() {
    const { modalOpen, setModalOpen } = useAuthStore()
    const [otpSent, setOtpSent] = useState(false)
    //Signup sends the OTP and tells the parent component to show the OTP component
    return <>
        <Modal visible={true} title={otpSent ? "We sent you a code!" : "Sign Up"} >
            {otpSent ? <OTP /> : <Signup setOtpSent={setOtpSent} />}
        </Modal>
    </>
}
