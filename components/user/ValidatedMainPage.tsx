'use client'
import {
    CornerDownLeft,
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
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { handleEngagementNote, test2 } from "@/lib/handleTransferData"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { HomeFacilities, HomeFacilityType } from "@/lib/data"
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
    facility: z.string()
})

export function ValidatedMainPage() {
    // default form for engagement 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            engagementNote: test2,
            patientName: "",
            rnName: "",
            facility: ""
        },
    })
    // case data will eventually be set to all the clinical patient info
    const [caseData, setCaseData] = useState<any>(null)
    // General data pertains to all info that is not included in the original engagement note
    const [generalData, setGeneralData] = useState<any>({
        patientName: "",
        rnCaseManager: "",
    })
    const [currentFacility, setCurrentFacility] = useState<HomeFacilityType | null>(null)
    // Once engagement note + patient name + RN name form is filled, we can auto generate the data for one touch + timeout
    function onEngagementNoteSubmit(values: z.infer<typeof formSchema>) {
        const filteredEngagementNote = handleEngagementNote(values)
        const matchedFacility = HomeFacilities.find(facility => facility.name == values.facility)
        setCaseData(filteredEngagementNote)
        setGeneralData({
            patientName: values.patientName,
            rnCaseManager: values.rnName,
        })
        matchedFacility && (
            setCurrentFacility(matchedFacility)
        )
    }
    return (
        <>
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
                                        name="facility"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Facility</FormLabel>
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
                            </div>

                            <FormField
                                control={form.control}
                                name="engagementNote"
                                render={({ field }) => (
                                    <FormItem>
                                        <fieldset className="grid gap-6 rounded-lg border p-4">
                                            <div className="grid gap-3">
                                                <FormLabel htmlFor="engagementNote">Engagement Note</FormLabel>
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
                {/* <div className="relative hidden flex-col items-start gap-8 md:flex">
                    <div className="grid w-full items-start gap-6">
                        <div className="grid gap-6 rounded-lg border p-2">
                            <div className="col-span-full">
                                {currentFacility && (
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/"> <span className="font-bold">BUC: </span> {currentFacility.buc} </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/components"><span className="font-bold">MOD: </span> {currentFacility.modName[0]}</BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator />
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                )}
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="relative  flex-col items-start gap-8 md:flex">
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-2">
                            <div className="col-span-2">
                                <Label htmlFor="oneTouchTemplate">One Touch</Label>
                                <div className="min-h-[24rem] min-w-[4rem] text-xs">
                                    <div className="flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-[24rem] min-w-[4rem] text-xs">
                                        {caseData && (
                                            <p>
                                                One Touch Template <br /> <br />  Name:  <span className="text-red-600">{generalData.patientName} </span> <br />
                                                Dx: <span className="text-red-600"> {caseData["Transfer Dx"]} </span>  <br />
                                                IVF/Drips: <span className="text-red-600">{caseData["IVF/Drips"]} </span><br />
                                                COVID status: <span className="text-red-600">{caseData["COVID status"]} </span> <br />
                                                Sitter/Restraints: <span className="text-red-600">{caseData["Sitter/Restraints"]} </span><br />
                                                Iso: <span className="text-red-600">{caseData["Iso (Y/N)"]} </span> <br />
                                                Code Status: <span className="text-red-600">{caseData["Code status"]} </span> <br />
                                                Height: <span className="text-red-600">{caseData["Ht"]} </span> <br />
                                                Weight: <span className="text-red-600">{caseData["wt"]} </span> <br />
                                                Bed Lvl: <span className="text-red-600">{caseData["Bed Lv Req'd"]}</span> <br /> <br />
                                                UA: <span className="text-red-600"> Jevon H </span><br />
                                                RN:  <span className="text-red-600">{generalData.rnCaseManager} </span> <br /> <br />
                                                If you can accept the patient, please reply "Accept"
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                {/* TIMEOUT HTML */}
                <div className="relative hidden flex-col items-start gap-8 md:flex">
                    <form className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-2">
                            <div className="col-span-2">
                                <Label htmlFor="oneTouchTemplate">Timeout</Label>
                                <div className="min-h-[24rem] min-w-[4rem] text-xs">
                                    <div className="flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-2 shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 min-h-[24rem] min-w-[4rem] text-xs">
                                        {caseData && (
                                            <p>
                                                Timeout with <span className="text-blue-600"> {generalData.rnCaseManager} </span> on
                                                <span className="text-blue-600"> {generalData.patientName} </span> <br /> <br />
                                                Going to Kaiser <span className="text-blue-600"> {currentFacility ? (<p className="inline-block">{currentFacility.name}</p>) : (<p className="inline-block">XXX</p>)} </span>
                                                Room XXX, Report XXX, Pickup at XXX. <br />
                                                Transport Lv: <span className="text-blue-600"> {caseData["Transport Lv Req'd"]} </span>,
                                                Equip Needed: <span className="text-blue-600"> {caseData["Equip needed"]} </span> <br />
                                                Dx: <span className="text-blue-600"> {caseData["Transfer Dx"]} </span>,
                                                IVF/Drips: <span className="text-blue-600"> {caseData["IVF/Drips"]} </span>,
                                                COVID status: <span className="text-blue-600"> {caseData["COVID status"]} </span> <br />
                                                Sitter/Restraints: <span className="text-blue-600"> {caseData["Sitter/Restraints"]} </span>,
                                                Iso: <span className="text-blue-600">{caseData["Iso (Y/N)"]} </span> ,
                                                Code Status: <span className="text-blue-600"> {caseData["Code status"]} </span> <br />
                                                Leaving: XXX,  <span className="text-blue-600">{caseData["Current Bed Level"]} </span>
                                                <span className="text-blue-600">{caseData["Current RM"]} </span>,
                                                Unit:  <span className="text-blue-600">{caseData["Unit phone#"]} </span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </main>
        </>
    )
}
