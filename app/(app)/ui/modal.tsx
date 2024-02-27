'use client'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Modal({ children }: { children: React.ReactNode }) {
    return <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>

}