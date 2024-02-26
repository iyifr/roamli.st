'use client'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export default function Modal({ children }: { children: React.ReactNode }) {
    return <AlertDialog.Root defaultOpen>
        <AlertDialog.Trigger />

        <AlertDialog.Portal>
            <AlertDialog.Overlay className='bg-blur-lg w-full h-full' />
            <AlertDialog.Content>
                <AlertDialog.Title >Sign up</AlertDialog.Title>
                <AlertDialog.Description >This is exciting for the both of us.</AlertDialog.Description>
                {children}
                <AlertDialog.Cancel />
                <AlertDialog.Action />
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
}