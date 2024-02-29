'use client'
import React, { useState } from 'react'
import useAuthStore from '../@auth/store'
import Modal from '../ui/modal'
import OTP from '../ui/otp'
import Signup from '../ui/signup'

const Page = () => {
    const [otpSent, setOtpSent] = useState(false)
    //Signup sends the OTP and tells the parent component to show the OTP component
    return <div className='max-w-xl mx-auto my-12 py-4'>
        <h1 className='text-3xl font-semibold'>{otpSent ? "We sent you a code!" : "Sign Up"}</h1>
        {otpSent ? <OTP /> : <Signup setOtpSent={setOtpSent} />}
    </div>
}

export default Page