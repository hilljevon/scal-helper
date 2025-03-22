"use client"
import React, { useState } from 'react'
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
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import TransferCard1 from './TransferCards/TransferCard1'
import TransferCard2 from './TransferCards/TransferCard2'
import TransferCard3 from './TransferCards/TransferCard3'
import TransferCard4 from './TransferCards/TransferCard4'
import TransferCardFinal from './TransferCards/TransferCardFinal'
const steps = [
    "NKF CM Info",
    "Bed Info",
    "NKF Info",
    "Patient Info",
    "Vitals"
]

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
const StabilityMainPage = () => {
    // Transfer Card 1
    const [generalInfo, setGeneralInfo] = useState<GeneralInfoInterface>({
        patientName: "Michael Smith",
        patientMRN: 1234567,
        nkfCMName: "Michael Jordan",
        nkfCMPhone: "7147682932"
    })
    // Transfer Card 2
    const [nkfInfo, setNkfInfo] = useState<NKFInfoInterface>({
        bedLevelRequested: "DOU",
        currentBedLevel: "ICU",
        currentRoom: "455",
        unitPhone: "818-789-2346",
        fax: "818-789-6543",
        nkfMdName: "Dr. Bryan Smitn",
        nkfMdPhone: "951-496-2894",
    })
    // Transfer Card 3
    const [patientInfo, setPatientInfo] = useState<PatientInfoInterface>({
        transferDx: "Sepsis",
        covidStatus: "Negative",
        testDate: "3/20/2025",
        sitterRestraints: "None",
        iso: "Y",
        isoSpecify: "Rhinovirus",
        codeStatus: "Full",
        ht: "5 ft 11",
        wt: "190 lbs"
    })
    // Transfer Card 4
    const [vitals, setVitals] = useState<VitalsInterface>({
        hr: 85,
        bp: "120/85",
        rr: '18',
        pain: "0",
        temp: 98,
        o2: "98% 2L"
    })
    // Our questionaire stack. Used to render breadcrumbs to backtrack. ** CAN ALSO CONSIDER JUST CREATING A BACK BUTTON
    const [allSteps, setAllSteps] = useState<any[]>([steps[0]])
    // Index representing which step on questionaire.
    const [currentStep, setCurrentStep] = useState<number>(0)
    // Handles going to next question.
    const handleNextClick = () => {
        setAllSteps((prevSteps) => {
            const newSteps = [...prevSteps, steps[currentStep + 1]]
            return newSteps
        })
        setCurrentStep((prevStep) => prevStep + 1)
    }
    const handleBeforeClick = () => {
        if (currentStep > 0 && allSteps.length > 1) {
            setAllSteps((prevSteps) => [...prevSteps.slice(0, -1)])
            setCurrentStep((prevStep) => prevStep - 1)
        }
    }
    return (
        <>
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-white px-4">
                <h1 className="text-xl font-semibold">Stability</h1>
                <div className='flex mx-auto'>
                    <div className="relative hidden flex-col items-start gap-8 md:flex">
                        <div className="grid w-full items-start gap-6">
                            <div className="grid gap-6 rounded-lg p-2">
                                <div className="col-span-full font-bold">
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <span className="text-yellow-700">Confirm with NKF CM: </span>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem className='text-blue-500'>
                                                1. Clinicals + Transfer order
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem className='text-green-500'>
                                                2. Copy of chart, CD's of all diagnostic tests, and discharge summary.
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem className='text-purple-500'>
                                                3. Patient + family agreeable for transfer.
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <fieldset className="flex justify-center rounded-lg border p-4 w-full gap-x-10">
                {/* Different card content rendered depending on current questionaire step */}
                <Card className='min-w-[50vw] max-w-[50vw]'>
                    {allSteps.length == 1 ? (
                        <TransferCard1 generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} allSteps={allSteps} />
                    ) : (allSteps.length == 2) ? (
                        <TransferCard2 nkfInfo={nkfInfo} setNkfInfo={setNkfInfo} allSteps={allSteps} />
                    ) : (allSteps.length == 3) ? (
                        <TransferCard3 allSteps={allSteps} patientInfo={patientInfo} setPatientInfo={setPatientInfo} />
                    ) : (allSteps.length == 3) ? (
                        <TransferCard4 vitals={vitals} setVitals={setVitals} allSteps={allSteps} />
                    ) : (
                        <TransferCardFinal
                            allSteps={allSteps}
                            generalInfo={generalInfo}
                            nkfInfo={nkfInfo}
                            patientInfo={patientInfo}
                            vitals={vitals}
                        />
                    )}
                    <CardFooter className='flex justify-center items-center gap-4'>
                        <CircleArrowLeft
                            className='hover:cursor-pointer'
                            onClick={handleBeforeClick}
                        />
                        <CircleArrowRight
                            className='hover:cursor-pointer'
                            onClick={handleNextClick}
                        />
                    </CardFooter>
                </Card>
            </fieldset>
        </>
    )
}

export default StabilityMainPage