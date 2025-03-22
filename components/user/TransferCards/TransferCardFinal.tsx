"use client"
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { toast } from "sonner"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CircleArrowRight, CopyCheckIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
interface NKFInfoInterface {
    bedLevelRequested: string,
    currentBedLevel: string,
    currentRoom: string,
    unitPhone: string,
    fax: string,
    nkfMdName: string,
    nkfMdPhone: string,
}
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
interface VitalsInterface {
    hr: number | undefined,
    bp: string | undefined,
    rr: string | undefined,
    pain: string | undefined,
    temp: number | undefined,
    o2: string | undefined
}

interface GeneralInfoInterface {
    patientName: string,
    patientMRN: number | undefined,
    nkfCMName: string,
    nkfCMPhone: string
}
const TransferCardFinal = ({ allSteps, generalInfo, nkfInfo, patientInfo, vitals }:
    { allSteps: string[], generalInfo: GeneralInfoInterface, nkfInfo: NKFInfoInterface, patientInfo: PatientInfoInterface, vitals: VitalsInterface }) => {
    const transferCopyPaste = `KP Transfer to Fac:

Tertiary Transfer (Y/N):

If (Y), Tertiary Reason:

Bed Lv Req’ed: ${nkfInfo.bedLevelRequested}

Transport Lv Req’ed:

Equip. needed:

IVF/Drips:



Current Bed Level: ${nkfInfo.currentBedLevel}

Current RM: ${nkfInfo.currentRoom}

Unit phone#: ${nkfInfo.unitPhone}

Fax#: ${nkfInfo.fax}

NKF MD name: ${nkfInfo.nkfMdName}

NKF MD phone #: ${nkfInfo.nkfMdPhone}

Transfer Dx: ${patientInfo.transferDx}

COVID status: ${patientInfo.covidStatus}

Test Date (if applicable): 

Sitter/Restraints: ${patientInfo.sitterRestraints}

Iso (Y/N): ${patientInfo.iso}

If yes, specify: ${patientInfo.isoSpecify}

Code status: ${patientInfo.codeStatus}

Ht: ${patientInfo.ht} Wt: ${patientInfo.wt}

Latest V/S:  BP: ${vitals.bp}, HR: ${vitals.hr}, Resp: ${vitals.rr}, Sat. O2: ${vitals.o2}, Temp.: ${vitals.temp}, Pain: ${vitals.pain}

 

Confirmed with NKF that pt and family is aware and agreeable for transfer, also requested a copy of the chart, CDs (films), and transfer summary. Please check vitals 1h prior to pick up.
`
    const renoCopyPaste = `xXXXX ….  AT XXX TCF: NKF CM ${generalInfo.nkfCMName} ${generalInfo.nkfCMPhone}-- Advising patient is stable for transfer and they will fax MD order with update clinical review... Initiated: SFT & Transfer Module ........ Informed assigned OURS CM ...... **XXX/OURSUA**
    `
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
            <CardContent className="grid grid-cols-2 gap-8">
                <div className="flex flex-col rounded-xl border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-full text-xs text-wrap">
                    <Button
                        variant={"outline"}
                        className='my-2'
                        onClick={() => {
                            navigator.clipboard.writeText(transferCopyPaste)
                            toast.success("Successfully Copied RENO Note.")
                        }}
                    >
                        Copy
                        <CopyCheckIcon />
                    </Button>
                    <pre className='text-wrap'>
                        {transferCopyPaste}
                    </pre>
                </div>
                <div className="flex flex-col rounded-xl border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-full text-xs text-wrap">
                    <Button
                        variant={"outline"}
                        className='my-2'
                        onClick={() => {
                            navigator.clipboard.writeText(renoCopyPaste)
                            toast.success("Successfully Copied RENO Note.")
                        }}
                    >
                        Copy
                        <CopyCheckIcon />
                    </Button>
                    <pre className='text-wrap'>
                        {renoCopyPaste}
                    </pre>
                </div>
            </CardContent>
        </>
    )
}

export default TransferCardFinal