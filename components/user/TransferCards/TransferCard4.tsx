"use client"
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
interface VitalsInterface {
    hr: number | undefined,
    bp: string | undefined,
    rr: string | undefined,
    pain: string | undefined,
    temp: number | undefined,
    o2: string | undefined
}
const TransferCard4 = ({ allSteps, vitals, setVitals }: { allSteps: string[], vitals: VitalsInterface, setVitals: any }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const val = e.target.value;
        setVitals((prevInfo: any) => {
            const newInfo = { ...prevInfo, [name]: val }
            return newInfo
        })
    }
    return (
        <>
            <CardHeader className='grid grid-cols-4'>
                <div className="col-span-1">
                    <CardTitle>
                        Questionaire
                    </CardTitle>
                </div>
                <Breadcrumb className='col-span-2'>
                    {allSteps.length > 1 && (
                        <BreadcrumbList className='text-xs flex flex-row mx-auto justify-center'>
                            {allSteps.map((step: any) => (
                                <BreadcrumbItem key={step} className='border p-1 border-blue-400 rounded-xl font-bold hover:bg-blue-500 hover:text-white hover:cursor-pointer'>
                                    <BreadcrumbLink className='hover:cursor-pointer hover:text-white' >
                                        {step}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            ))}
                        </BreadcrumbList>
                    )}
                </Breadcrumb>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-8">
                <div className="col-span-1 grid gap-2">
                    <Label>HR</Label>
                    <Input
                        name='hr'
                        type='text'
                        value={vitals.hr}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>BP</Label>
                    <Input
                        name='bp'
                        type='text'
                        value={vitals.bp}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>RR</Label>
                    <Input
                        name='rr'
                        type='text'
                        value={vitals.rr}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Pain</Label>
                    <Input
                        name='pain'
                        type='text'
                        value={vitals.pain}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Temp</Label>
                    <Input
                        name='temp'
                        type='text'
                        value={vitals.temp}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>O2</Label>
                    <Input
                        name='o2'
                        type='text'
                        value={vitals.o2}
                        onChange={handleInputChange}
                    />
                </div>
            </CardContent>
        </>
    )
}

export default TransferCard4