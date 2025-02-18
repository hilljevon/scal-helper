"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"
import { Button } from '../ui/button'
import {
    Form,
    FormField,
    FormItem,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ReactDOM from 'react-dom';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import ClinReqPDF from './ClinReqPDF'
import { Check, CheckIcon, ChevronsUpDown, MoveRight, PlusCircleIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PDFViewer } from '@react-pdf/renderer'


const FormSchema = z.object({
    clinReqPatients: z
        .string()
})
// Dummy Data generated from pasting assignments to textbox
const dummyData = 'Michael\tSmith\t03/13/1935\t00-00345931035\t35\t4\tSepsis\tPalmdale Desert Regional\t11/02/2024\nKyle\tHunter\t04/01/1968\t00-23946893\t74\t15\tAfib\tPalmdale Desert Regional\t11/01/2024\nSam\tJenkins\t02/22/1955\t00-2569421\t66\t2\tCovid-19\tPalmdale Desert Regional\t11/12/2024'
interface ClinReqPatientsInterface {
    label: string,
    value: string,
    name: string,
    dob: string,
    mrn: string,
    nkf: string,
    admitDate: string
}
const ClinicalRequestForm = ({ facilities, patients }: { facilities: any[], patients: ClinReqPatientsInterface[] }) => {
    // dialog that gets populated for clinical request preview
    const dialogContentRef = useRef<HTMLDivElement>(null);
    // determines whether we are on paste page or clincal request preview page
    const [isPDFView, setIsPDFView] = useState(false)
    // form preview
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            clinReqPatients: dummyData
        }
    })
    // after being separated from the initial string, the separated patients are stored in this state
    const [patientClinRequests, setPatientClinRequests] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [currentPatient, setCurrentPatient] = useState<ClinReqPatientsInterface | null>(null)
    const [clinReqPatients, setClinReqPatients] = useState<ClinReqPatientsInterface[]>([])

    // populates the current date for clinical request autofill
    const [currentDate, setCurrentDate] = useState<string>("")
    // to prevent hydration errors, current date generated upon client component launch
    useEffect(() => {
        const date = new Date(Date.now()).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
        setCurrentDate(date)
    }, [])
    // after pasting the case assignments and clicking next, the text is parsed and each individual patient is generated
    function onSubmit(data: z.infer<typeof FormSchema>) {
        // Split arrays will separate each individual patient ROW. If three rows are inputted into the textbox, there will be an array of 3 strings.
        const splitArrays = (data.clinReqPatients.split("\n"))
        // New strings takes the one long string we have of all the patient data, and separates it by cell. Instead of one long string, it will be separated by each unique case detail (name, facility, dx)
        const newStrings = splitArrays.map((s: string) => {
            // \t is the notation for new excel columns
            return s.split("\t")
        })
        // this is our returning array that will contain each patient's data as an object
        const allRequests = []
        // We only need to loop according to how many rows were pasted. Then we are accessing the appropriate indexes so long as the user pasted from the first name to the admitDate. 
        for (let i = 0; i < newStrings.length; i++) {
            // for this object, the first index represents the specific case while the second index represents the particular case data.
            const patientReq = {
                firstName: newStrings[i][0],
                lastName: newStrings[i][1],
                dob: newStrings[i][2],
                mrn: newStrings[i][3],
                admitDate: newStrings[i][8]
            }
            // after generating all organized case data, we need to push to final result array
            allRequests.push(patientReq)
        }
        // reset our state to reflect new patients
        setPatientClinRequests(allRequests)
        // populate clinical request preview
        setIsPDFView(() => !isPDFView)
    }
    const addPatient = () => {
        if (currentPatient) {
            setClinReqPatients((oldPatients) => {
                return [...oldPatients, currentPatient]
            })
        }
        setCurrentPatient(null)
        setValue("")
    }
    const removeFromPatients = (patient: ClinReqPatientsInterface) => {
        setClinReqPatients((prevPatients) => {
            const patients = prevPatients.filter(pt => pt.value != patient.value)
            return patients
        })
    }
    console.log("Facility here", facilities[0])
    return (
        <>
            {isPDFView ? (
                // clinical request dialog
                <DialogHeader>
                    <div ref={dialogContentRef}>
                        <DialogTitle></DialogTitle>
                        <DialogDescription asChild>
                            <div className=''>
                                <PDFViewer className='w-full h-[500px]'>
                                    <ClinReqPDF clinReqPatients={clinReqPatients} facility={facilities[0]} date={currentDate} />
                                </PDFViewer>
                            </div>
                        </DialogDescription>
                    </div>
                </DialogHeader>
            ) : (
                // patient populate form
                <DialogHeader>
                    <DialogTitle className='text-center'> {facilities[0].name} </DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <div className='flex mt-6 justify-between'>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[300px] justify-between"
                                        >
                                            {value
                                                ? patients.find((patient) => patient.value === value)?.label
                                                : "Select patient..."}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[300px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search framework..." />
                                            <CommandList>
                                                <CommandEmpty>No patient found.</CommandEmpty>
                                                <CommandGroup>
                                                    {patients.map((patient) => (
                                                        <CommandItem
                                                            key={patient.value}
                                                            value={patient.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                setCurrentPatient(currentValue === value ? null : patient)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    value === patient.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {patient.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <Button className='bg-green-600 hover:bg-green-300' onClick={addPatient}>
                                    <PlusCircleIcon />
                                    Add
                                </Button>
                            </div>
                            <div>
                                {clinReqPatients && (
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        {clinReqPatients.map((patient: ClinReqPatientsInterface) => (
                                            <Card className='w-4/5 h-full col-span-1' key={patient.value}>
                                                <CardHeader>
                                                    <CardTitle> {patient.value} </CardTitle>
                                                    <CardDescription> KP MRN: {patient.mrn} </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                </CardContent>
                                                <CardFooter className='flex justify-center'>
                                                    <Button onClick={() => removeFromPatients(patient)} variant="outline" size="icon">
                                                        <X color='red' />
                                                    </Button>
                                                </CardFooter>
                                            </Card>

                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogDescription>
                    <DialogFooter>
                        <Button
                            className='bg-blue-600 hover:bg-blue-400'
                            onClick={() => {
                                setIsPDFView(true)
                            }}>
                            <MoveRight />
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            )}
        </>
    )
}
if (typeof Promise.withResolvers === 'undefined') {
    if (window)
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
}

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
//     import.meta.url
// ).toString();
export default ClinicalRequestForm
