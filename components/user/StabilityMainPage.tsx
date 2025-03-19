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
const steps = [
    "NKF CM Info",
    "Bed Info",
    "NKF Info",
    "Patient Info",
    "Vitals"
]
interface TransferInfoInterface {
    bedLevelRequested: string,
    currentBedLevel: string,
    currentRoom: string,
    unitPhone: string,
    fax: string,
    nkfMdName: string,
    nkfMdPhone: string,
    transferDx: string,
    covidStatus: string,
    testDate: string,
    sitterRestraints: string,
    iso: string,
    isoSpecify: string,
    codeStatus: string,
    ht: string,
    wt: string,
}
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
    bp: number | undefined,
    rr: string | undefined,
    pain: string | undefined,
    temp: number | undefined,
    o2: string | undefined
}
const StabilityMainPage = () => {
    const [nkfCMName, setNkfCmName] = useState<string>("")
    // NKF CM Phone state. Currently separated due to phone number parsing function. See TransferCard1 function
    const [nkfCMPhone, setNkfCMPhone] = useState<string>("");
    // Relevant NKF info
    const [nkfInfo, setNkfInfo] = useState<NKFInfoInterface>({
        bedLevelRequested: "",
        currentBedLevel: "",
        currentRoom: "",
        unitPhone: "",
        fax: "",
        nkfMdName: "",
        nkfMdPhone: "",
    })
    const [patientInfo, setPatientInfo] = useState<PatientInfoInterface>({
        transferDx: "",
        covidStatus: "",
        testDate: "",
        sitterRestraints: "",
        iso: "",
        isoSpecify: "",
        codeStatus: "",
        ht: "",
        wt: ""
    })
    const [vitals, setVitals] = useState<VitalsInterface>({
        hr: undefined,
        bp: undefined,
        rr: undefined,
        pain: undefined,
        temp: undefined,
        o2: undefined
    })
    // Our questionaire stack. Used to render breadcrumbs to backtrack. ** CAN ALSO CONSIDER JUST CREATING A BACK BUTTON
    const [allSteps, setAllSteps] = useState<any[]>([steps[0]])
    // Index representing which step on questionaire.
    const [currentStep, setCurrentStep] = useState<number>(0)
    // All tx info. May be separated into separate states according to NKF, patient, and vitals
    const [transferInfo, setTransferInfo] = useState<TransferInfoInterface>({
        bedLevelRequested: "",
        currentBedLevel: "",
        currentRoom: "",
        unitPhone: "",
        fax: "",
        nkfMdName: "",
        nkfMdPhone: "",
        transferDx: "",
        covidStatus: "",
        testDate: "",
        sitterRestraints: "",
        iso: "",
        isoSpecify: "",
        codeStatus: "",
        ht: "",
        wt: ""
    })
    // Handles going to next question. ** NEED TO ADD PREVIOUS CLICK FUNCTION
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
            <fieldset className="flex justify-center rounded-lg border p-4 w-full gap-x-10  ">
                {/* Different card content rendered depending on current questionaire step */}
                <Card className='min-w-[50vw] max-w-[50vw]'>
                    {allSteps.length == 1 ? (
                        <TransferCard1 nkfCMName={nkfCMName} setNkfCmName={setNkfCmName} nkfCMPhone={nkfCMPhone} setNkfCMPhone={setNkfCMPhone} allSteps={allSteps} />
                    ) : (allSteps.length == 2) ? (
                        <TransferCard2 nkfInfo={nkfInfo} setNkfInfo={setNkfInfo} allSteps={allSteps} />
                    ) : (allSteps.length == 3) ? (
                        <TransferCard3 allSteps={allSteps} patientInfo={patientInfo} setPatientInfo={setPatientInfo} />
                    ) : (
                        <TransferCard4 vitals={vitals} setVitals={setVitals} allSteps={allSteps} />
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