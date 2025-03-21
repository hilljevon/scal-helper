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
interface PatientInfoInterface {
    transferDx: string,
    covidStatus: string,
    testDate: string,
    sitterRestraints: string,
    iso: string,
    isoSpecify: string,
    codeStatus: string,
    ht: string,
    wt: string
}
const TransferCard3 = ({ allSteps, patientInfo, setPatientInfo }: { allSteps: string[], patientInfo: PatientInfoInterface, setPatientInfo: any }) => {
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
                        value={patientInfo.transferDx}
                        type='text'
                        onChange={handleInputChange}
                        placeholder=""
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Covid Status</Label>
                    <Input
                        name='covidStatus'
                        value={patientInfo.covidStatus}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Test Date</Label>
                    <Input
                        name='curretestDatentRoom'
                        value={patientInfo.testDate}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Sitter/Restraints</Label>
                    <Input
                        name='sitterRestraints'
                        value={patientInfo.sitterRestraints}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Iso</Label>
                    <Input
                        name='iso'
                        value={patientInfo.iso}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Iso Specify: </Label>
                    <Input
                        name='isoSpecify'
                        value={patientInfo.isoSpecify}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Code Status</Label>
                    <Input
                        name='codeStatus'
                        value={patientInfo.codeStatus}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Height</Label>
                    <Input
                        name='ht'
                        value={patientInfo.ht}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Weight</Label>
                    <Input
                        name='wt'
                        value={patientInfo.wt}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
            </CardContent>
        </>
    )
}

export default TransferCard3