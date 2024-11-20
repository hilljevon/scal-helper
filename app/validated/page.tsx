import { ValidatedMainPage } from '@/components/user/ValidatedMainPage'
import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bird, Rabbit, Settings, Turtle } from 'lucide-react'

const page = () => {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Transfer tool</h1>
                {/* <div className='flex mx-auto'>
                    <h1>Insert Facility Breadcrumb Here</h1>
                </div> */}
            </header>
            <ValidatedMainPage />
        </>
    )
}

export default page