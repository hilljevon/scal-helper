'use client'
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { parseAndRemoveKeys, test1, test2 } from "@/lib/handleTransferData"
import { useState } from "react"
import { cn } from "@/lib/utils"
const formSchema = z.object({
    engagementNote: z.string().min(2, {
        message: "Engagement note not valid",
    }),
    patientName: z.string(),
    rnName: z.string()
})

export function ValidatedMainPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            engagementNote: test2,
            patientName: "",
            rnName: ""
        },
    })
    // case data will eventually be set to all the clinical patient info
    const [caseData, setCaseData] = useState<any>(null)
    const [generalData, setGeneralData] = useState({
        patientName: "",
        rnCaseManager: ""
    })
    const [oneTouchTemplate, setOneTouchTemplate] = useState("")
    const [timeoutTemplate, setTimeoutTemplate] = useState("")
    function onEngagementNoteSubmit(values: z.infer<typeof formSchema>) {
        // this function parses all the tx info into an object with all patient clinical info
        const csData = parseAndRemoveKeys(values)
        setCaseData(csData)
        setGeneralData({
            patientName: values.patientName,
            rnCaseManager: values.rnName
        })
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
                <div className="relative hidden flex-col items-start gap-8 md:flex">
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
                                                Going to Kaiser XXX Room XXX, Report XXX, Pickup at XXX. <br />
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
