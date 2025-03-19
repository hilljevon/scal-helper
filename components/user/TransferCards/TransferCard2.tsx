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
interface NKFInfoInterface {
    bedLevelRequested: string,
    currentBedLevel: string,
    currentRoom: string,
    unitPhone: string,
    fax: string,
    nkfMdName: string,
    nkfMdPhone: string,
}
const TransferCard2 = ({ allSteps, nkfInfo, setNkfInfo }: { allSteps: any, nkfInfo: NKFInfoInterface, setNkfInfo: any }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const val = e.target.value;
        setNkfInfo((prevInfo: any) => {
            const newInfo = { ...prevInfo, [name]: val }
            return newInfo
        })
    }
    console.log("NKF Info here", nkfInfo)
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
                    <Label>Bed Level Req'd</Label>
                    <Input
                        name='bedLevelRequested'
                        type='text'
                        value={nkfInfo.bedLevelRequested}
                        onChange={handleInputChange}
                        placeholder=""
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Current Bed Lvl</Label>
                    <Input
                        name='currentBedLevel'
                        value={nkfInfo.currentBedLevel}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Current Room #</Label>
                    <Input
                        name='currentRoom'
                        value={nkfInfo.currentRoom}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Unit Phone</Label>
                    <Input
                        name='unitPhone'
                        value={nkfInfo.unitPhone}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>Fax #</Label>
                    <Input
                        name='fax'
                        value={nkfInfo.fax}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>NKF MD Name</Label>
                    <Input
                        name='nkfMdName'
                        value={nkfInfo.nkfMdName}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
                <div className="col-span-1 grid gap-2">
                    <Label>NKF MD #</Label>
                    <Input
                        name='nkfMdPhone'
                        value={nkfInfo.nkfMdPhone}
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
            </CardContent>
        </>
    )
}

export default TransferCard2