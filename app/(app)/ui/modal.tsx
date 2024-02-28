'use client'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Modal({ children, visible, title, setVisible, closeOnClickOutside = true }: { children: React.ReactNode, visible: boolean, title?: string, setVisible?: (val: boolean) => void, closeOnClickOutside?: boolean }) {
    return <Dialog open={visible} onOpenChange={setVisible ?? undefined}>
        <DialogTrigger className="hidden">Hello world</DialogTrigger>
        <DialogContent onPointerDownOutside={(e) => closeOnClickOutside ? null : e.preventDefault()} route>
            <DialogHeader>
                <DialogTitle className="text-3xl">{title}</DialogTitle>
                <DialogDescription>
                    {children}
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>

}