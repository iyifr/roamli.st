'use client'
import React, { useState } from 'react'
import useAuthStore from '../@auth/store'
import Modal from '../ui/modal'
import OTP from '../ui/otp'
import Signup from '../ui/signup'

const Page = () => {
    const [otpSent, setOtpSent] = useState(false)
    //Signup sends the OTP and tells the parent component to show the OTP component
    return <>
        <h1>{otpSent ? "We sent you a code!" : "Sign Up"}</h1>
        {otpSent ? <OTP /> : <Signup setOtpSent={setOtpSent} />}
    </>
}

export default Page