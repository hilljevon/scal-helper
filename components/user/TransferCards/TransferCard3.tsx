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
const TransferCard3 = ({ allSteps, patientInfo, setPatientInfo }: { allSteps: any, patientInfo: any, setPatientInfo: any }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const val = e.target.value;
        setPatientInfo((prevInfo: any) => {
            const newInfo = { ...prevInfo, [name]: val }
            return newInfo
        })
    }
    return (
        <>
            <CardHeader className='grid grid-cols-3'>
                <div className="col-span-1">
                    <CardTitle>
                        Questionaire
                    </CardTitle>
                </div>
                <Breadcrumb className='col-span-1'>
                    {allSteps.length > 1 && (
                        <BreadcrumbList className='text-xs'>
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
                    <Label>Transfer Dx</Label>
                    <Input
                        name='transferDx'
                        type='text'
                        onChange={handleInputChange}
                        placeholder=""
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Covid Status</Label>
                    <Input
                        name='covidStatus'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Test Date</Label>
                    <Input
                        name='curretestDatentRoom'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Sitter/Restraints</Label>
                    <Input
                        name='sitterRestraints'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Iso</Label>
                    <Input
                        name='iso'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Iso Specify: </Label>
                    <Input
                        name='isoSpecify'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Code Status</Label>
                    <Input
                        name='codeStatus'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Height</Label>
                    <Input
                        name='ht'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Weight</Label>
                    <Input
                        name='wt'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
            </CardContent>
        </>
    )
}

export default TransferCard3