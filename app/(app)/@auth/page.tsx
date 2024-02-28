'use client'
import { Input } from "@/components/ui/input";
import Modal from "../ui/modal";
import useAuthStore from "./store";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Signup from "../ui/signup";
import OTP from "../ui/otp";
import { useState } from "react";

export default function Page() {
    // const { modalOpen, setModalOpen } = useAuthStore()
    // const [otpSent, setOtpSent] = useState(false)
    // //Signup sends the OTP and tells the parent component to show the OTP component
    // return <>
    //     <Modal visible={modalOpen} setVisible={setModalOpen} title={otpSent ? "We sent you a code!" : "Sign Up"} >
    //         {otpSent ? <OTP /> : <Signup setOtpSent={setOtpSent} />}
    //     </Modal>
    // </>
    return <div />
}
