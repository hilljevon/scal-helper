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

const TransferCard1 = ({ nkfCMName, nkfCMPhone, setNkfCMPhone, allSteps, setNkfCmName }: { nkfCMName: any, setNkfCmName: any, nkfCMPhone: any, setNkfCMPhone: any, allSteps: any }) => {
    // Formats NKF CM phone number in (XXX) XXX-XXXX 
    const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters
        const cleaned = value.replace(/\D/g, "");
        // Format as (123) 456-7890
        if (cleaned.length <= 3) return cleaned;
        if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    };
    // Handles input change.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name == "nkfCMName") {
            setNkfCmName(e.target.value)
            // If we are dealing with phone number, additional text parse function needs to be called first.
        } else {
            setNkfCMPhone(formatPhoneNumber(e.target.value));
        }
    };

    return (
        <>
            <CardHeader className='grid grid-cols-3 gap-8'>
                <div className="col-span-1">
                    <CardTitle>
                        Questionaire
                    </CardTitle>
                </div>
                <Breadcrumb className='col-span-1'>
                    {/* Breadcrumb list is only rendered if we are beyond the first question in questionaire */}
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
            <CardContent className="flex justify-around">
                <div className=" col-start-2 col-span-1">
                    <Label>NKF CM Name</Label>
                    <Input
                        type='text'
                        name='nkfCMName'
                        value={nkfCMName}
                        onChange={handleInputChange}
                        placeholder=""
                    />
                </div>
                <div className="col-start-4 col-span-1">
                    <Label>NKF CM Phone</Label>
                    <Input
                        type='text'
                        name='nkfCMPhone'
                        value={nkfCMPhone}
                        onChange={handleInputChange}
                        maxLength={14}
                        placeholder="(123)456-7890"
                    />
                </div>
            </CardContent>
        </>
    )
}

export default TransferCard1