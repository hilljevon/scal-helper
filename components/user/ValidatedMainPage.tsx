'use client'
import {
    ArrowRight,
    ChevronRight,
    CornerDownLeft,
    StepForward,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { handleEngagementNote, test2 } from "@/lib/handleTransferData"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { facilities, FacilityType, HomeFacilities, HomeFacilityType } from "@/lib/data"
type GeneralDataInterface = {
    patientName: string,
    rnCaseManager: string,
    facility: HomeFacilityType
}
// form schema for not engagement note
const formSchema = z.object({
    engagementNote: z.string().min(2, {
        message: "Engagement note not valid",
    }),
    patientName: z.string(),
    rnName: z.string(),
    homeFacility: z.string(),
    nkf: z.string()
})
const dummyEngagementNoteData = [
    "Bed Lv Req’ed: tele Transport Lv Req’ed: als Equip needed: monitor, oxygen prn IVF/Drips: none Current Bed Level: med surg Current RM: 2114 Unit phone#: 919 336 5502 x2147 Fax#: NKF MD name: dr francis NKF MD phone #: 714 551 0992 Transfer Dx: s/p glioblastoma resection COVID status: not done Test Date (if applicable): Sitter/Restraints:n Iso (Y/N): Droplet ISO If yes, specify: Rhinovirus  Code status: full Ht: 5ft 10in Wt: 109 lbs",
    "Bed Lv Req’ed: ICU Transport Lv Req’ed: CCT-RN Equip needed: monitor, mask IVF/Drips: heparin gtt 5cc/hr Current Bed Level: ICU Current RM: 5223 Unit phone#: 646-442-2214 Fax#: NKF MD name: dr Smith NKF MD phone #: 949-324-2147 Transfer Dx: SEPSIS, COVID COVID status: Positive Test Date(if applicable): 10 / 14 Sitter / Restraints:Bilateral wrist restraints Iso (Y/N): Y If yes, specify: COVID Code status: DNR / DNI Ht: 170cm Wt: 57kg",
    "Bed Lv Req’ed: DOU Transport Lv Req’ed: BLS Equip needed: Cardiac Monitor IVF/Drips: Normal saline Current Bed Level: Tele Current RM: 1234 Unit phone#: 714-768-2944 Fax#: 714-888-4563 NKF MD name: dr Silvia Martinez NKF MD phone #: 949-324-2147 Transfer Dx: Failure to thrive COVID status: negative Test Date(if applicable): 10 / 14 Sitter / Restraints: Sitter Bilateral wrist restraints Iso (Y/N): N If yes, specify: Code status: DNR / DNI Ht: 170cm Wt: 57kg"
]
export function ValidatedMainPage() {
    const [activeEngagementNote, setActiveEngagementNote] = useState(0)
    // default form for engagement 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            engagementNote: dummyEngagementNoteData[activeEngagementNote],
            patientName: "",
            rnName: "",
            homeFacility: "",
            nkf: ""
        },
    })
    // case data will eventually be set to all the clinical patient info
    const [caseData, setCaseData] = useState<any>(null)
    // General data pertains to all info that is not included in the original engagement note
    const [generalData, setGeneralData] = useState<any>({
        patientName: "",
        rnCaseManager: "",
    })

    // THIS IS THE HOME FACILITY
    const [currentFacility, setCurrentFacility] = useState<HomeFacilityType | null>(null)
    // this is the facility the patient is currently at
    const [nkf, setNkf] = useState<FacilityType | null>(null)
    // Once engagement note + patient name + RN name form is filled, we can auto generate the data for one touch + timeout
    function onEngagementNoteSubmit(values: z.infer<typeof formSchema>) {
        // Takes engagement note and organizes it into patient data
        const filteredEngagementNote = handleEngagementNote(values)
        // populate the KP facility data that user selects
        const matchedFacility = HomeFacilities.find(facility => facility.name == values.homeFacility)
        // populate the NKF info that user selects
        const matchedNkf = facilities.find(nkf => nkf.name == values.nkf)
        // generate our case data as the new case info object
        setCaseData(filteredEngagementNote)
        // all other case info not included in the engagement note that user inputs
        setGeneralData({
            patientName: values.patientName,
            rnCaseManager: values.rnName,
        })
        // if matched facility found, set currentFacility to such
        matchedFacility && (
            setCurrentFacility(matchedFacility)
        )
        // if NFK facility found, set NKF to such
        matchedNkf && (
            setNkf(matchedNkf)
        )
    }
    const toggleEngagementNote = () => {
        setActiveEngagementNote((prevInt) => (prevInt + 1) % 3)
        form.setValue("engagementNote", dummyEngagementNoteData[activeEngagementNote])
    }
    return (
        <>
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Transfer tool</h1>
                <div className='flex mx-auto'>
                    <div className="relative hidden flex-col items-start gap-8 md:flex">
                        <div className="grid w-full items-start gap-6">
                            <div className="grid gap-6 rounded-lg p-2">
                                <div className="col-span-full font-bold">
                                    {currentFacility && (
                                        <Breadcrumb>
                                            <BreadcrumbList>
                                                <BreadcrumbItem>
                                                    <BreadcrumbLink href="/"> <span className=" text-purple-500">BUC: </span> {currentFacility.buc} </BreadcrumbLink>
                                                </BreadcrumbItem>
                                                <BreadcrumbSeparator />
                                                <BreadcrumbItem>
                                                    <BreadcrumbLink href="/components"><span className="text-green-500">MOD: </span> {currentFacility.modName[0]}</BreadcrumbLink>
                                                </BreadcrumbItem>
                                                <BreadcrumbSeparator />
                                            </BreadcrumbList>
                                        </Breadcrumb>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
                >
                    {/* INITIAL INPUT FORM */}
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onEngagementNoteSubmit)} className="grid w-full items-start gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="patientName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="patientName">Patient Name</Label>
                                                <FormControl>
                                                    <Input id="patientName" type="" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="rnName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="rnName">RN</Label>
                                                <FormControl>
                                                    <Input id="rnName" type="" placeholder="" {...field} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <FormField
                                        control={form.control}
                                        name="homeFacility"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Home Facility</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a facility" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {HomeFacilities.map((facility) => (
                                                            <SelectItem value={facility.name} key={facility.name}>{facility.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <FormField
                                        control={form.control}
                                        name="nkf"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>NKF</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a NKF" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {facilities.map((facility) => (
                                                            <SelectItem value={facility.name} key={facility.name}> <span className="underline">{facility.name} </span> - {facility.address.substring(0, 28)} ... </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="engagementNote"
                                render={({ field }) => (
                                    <FormItem>
                                        <fieldset className="grid gap-6 rounded-lg border p-4">
                                            <div className="grid gap-3">
                                                <FormLabel htmlFor="engagementNote">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Engagement Note
                                                        </div>
                                                        <div>
                                                            <ChevronRight onClick={toggleEngagementNote} className="size-5 hover:cursor-pointer" />
                                                        </div>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        id="engagementNote"
                                                        placeholder="Insert Engagement Note"
                                                        className="min-h-[18rem]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </fieldset>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                Generate
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="relative  flex-col items-start gap-8 md:flex">
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-2">
                            <div className="col-span-full">
                                <Label htmlFor="oneTouchTemplate">One Touch</Label>
                                <div className="min-h-[24rem] min-w-[4rem] text-xs">
                                    <div className="flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-[24rem] min-w-[4rem] text-xs">
                                        {caseData && (
                                            <p className="text-base">
                                                One Touch Template <br /> <br />  Name:  <span className="text-red-600">{generalData.patientName} </span> <br />

                                                {/* May need to create conditional */}
                                                Dx: <span className="text-red-600"> {caseData["Transfer Dx"]} </span>  <br />
                                                NKF: <span className="text-red-600"> {nkf?.name} </span>  <br />
                                                IVF/Drips: <span className="text-red-600">{caseData["IVF/Drips"]} </span><br />
                                                COVID status: <span className="text-red-600">{caseData["COVID status"]} </span> <br />
                                                Sitter/Restraints: <span className="text-red-600">{caseData["Sitter/Restraints"]} </span><br />
                                                Iso: <span className="text-red-600">{caseData["Iso (Y/N)"]} {caseData["If yes, specify"]}  </span> <br />
                                                Code Status: <span className="text-red-600">{caseData["Code status"]} </span> <br />
                                                {/* May need to create conditional */}
                                                Height: <span className="text-red-600">{caseData["Ht"]} </span> <br />
                                                {/* May need to create conditional */}
                                                Weight: <span className="text-red-600">{caseData["Wt"]} </span> <br />
                                                {/* May need to create conditional */}
                                                Bed Lvl: <span className="text-red-600">{caseData["Bed Lv Req’ed"]}</span> <br /> <br />
                                                UA: <span className="text-red-600"> Jevon H </span><br />
                                                RN:  <span className="text-red-600">{generalData.rnCaseManager} </span> <br /> <br />
                                                If you can accept the patient, please reply "Accept"
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>One Touch Process</AccordionTrigger>
                                        <AccordionContent className="text-xs">
                                            <span className="font-extrabold">1. </span> Check <span className="underline text-blue-600 hover:cursor-pointer">CEDOCS </span> to make sure facility is open <br />
                                            <span className="font-extrabold">2. </span> Confirm if there are sister facilities <br />
                                            <span className="font-extrabold">2a. </span>If yes, confirm with BUC on which facility to proceed. <br />
                                            <span className="font-extrabold">3. </span> Send cortext to OURS One Touch group, MD on call, OURS physician, and OURS CM. <br />
                                            <span className="font-extrabold">4. </span> Confirm MD accept + bed. <br />
                                            <span className="font-extrabold">5. </span> Tx checkoff list + vital signs.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </fieldset>
                    </form>
                </div>
                {/* TIMEOUT HTML */}
                <div className="relative hidden flex-col items-start gap-8 md:flex">
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-2">
                            <div className="col-span-full">
                                <Label htmlFor="oneTouchTemplate">Timeout</Label>
                                <div className="min-h-[24rem] min-w-[4rem] text-xs">
                                    <div className="flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-[24rem] min-w-[4rem] text-xs">
                                        {caseData && (
                                            <p className="text-lg">
                                                Timeout with <span className="text-blue-600"> {generalData.rnCaseManager} </span> on
                                                <span className="text-blue-600"> {generalData.patientName} </span> <br /> <br />
                                                Going to Kaiser <span className="text-blue-600"> {currentFacility ? (<p className="inline-block">{currentFacility.name}</p>) : (<p className="inline-block">XXX</p>)} </span>
                                                Room XXX, Report XXX, Pickup at XXX. Level of Care: <p className="inline-block">{caseData["Bed Lv Req’ed"]}</p> <br />
                                                Transport Lv: <span className="text-blue-600"> {caseData["Transport Lv Req’d"]} </span>,
                                                Equip Needed: <span className="text-blue-600"> {caseData["Equip. needed"]} </span> <br />
                                                Dx: <span className="text-blue-600"> {caseData["Transfer Dx"]} </span>,
                                                IVF/Drips: <span className="text-blue-600"> {caseData["IVF/Drips"]} </span>,
                                                COVID status: <span className="text-blue-600"> {caseData["COVID status"]} </span> <br />
                                                Sitter/Restraints: <span className="text-blue-600"> {caseData["Sitter/Restraints"]} </span>,
                                                Iso: <span className="text-blue-600">{caseData["Iso (Y/N)"]} {caseData["If yes, specify"]} </span> ,
                                                Code Status: <span className="text-blue-600"> {caseData["Code status"]} </span> <br /> <br />
                                                Leaving: <span className="text-pink-600"> {nkf ? (<p className="inline-block">{nkf.name}</p>) : (<p className="inline-block">XXX</p>)} </span>,
                                                <span className="text-pink-600">{caseData["Current Bed Level"]} </span>
                                                <span className="text-pink-600">{caseData["Current RM"]} </span>,
                                                Unit:  <span className="text-pink-600">{caseData["Unit phone#"]} </span> <br />
                                                Ht: {caseData["Ht"]}, Wt: {caseData["Wt"]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Regular Process</AccordionTrigger>
                                        <AccordionContent className="text-xs">
                                            <span className="font-extrabold">1. </span> Check <span className="underline text-blue-600 hover:cursor-pointer">CEDOCS </span> to make sure facility is open <br />
                                            <span className="font-extrabold">2. </span> Contact BUC {currentFacility?.buc} for ok to get accepting  <br />
                                            <span className="font-extrabold">3. </span>If yes, cortext once summary is uploaded. <br />
                                            <span className="font-extrabold">3. </span> Notify BUC of accepting MD. <br />
                                            <span className="font-extrabold">4. </span> Tx checkoff list. <br />
                                            <span className="font-extrabold">5. </span> Once bed info provided, set up vectorcare + vitals.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </main>
        </>
    )
}
