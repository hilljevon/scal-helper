"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
    DialogDescription,
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

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const FormSchema = z.object({
    clinReqPatients: z
        .string()
})
// Dummy Data generated from pasting assignments to textbox
const dummyData = 'Michael\tSmith\t03/13/1935\t00-00345931035\t35\t4\tSepsis\tPalmdale Desert Regional\t11/02/2024\nKyle\tHunter\t04/01/1968\t00-23946893\t74\t15\tAfib\tPalmdale Desert Regional\t11/01/2024\nSam\tJenkins\t02/22/1955\t00-2569421\t66\t2\tCovid-19\tPalmdale Desert Regional\t11/12/2024'
const ClinicalRequestForm = ({ facilities }: { facilities: any[] }) => {
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
    // generates a new tab with print preview
    const handlePrint = () => {
        const content = dialogContentRef.current?.innerHTML;
        if (content) {
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                printWindow.document.write(`
          <html>
            <head>
              <style>
                @media print {
                  body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                  button { display: none; }
                  /* Additional print styles */
                }
              </style>
            </head>
            <body>${content}</body>
          </html>
        `);
                printWindow.document.close();
                printWindow.print();
            }
        }
    };
    return (
        <>
            {isPDFView ? (
                // clinical request dialog
                <DialogHeader>
                    <div ref={dialogContentRef}>
                        <DialogTitle></DialogTitle>
                        <DialogDescription asChild>
                            <div className=''>
                                <div className='flex justify-center items-center my-2'>
                                    <Image src={"/images/kp_logo.webp"} width={100} height={100} alt='logo' />
                                </div>
                                <div className='text-xs'>
                                    <p> Date: {currentDate}</p> <br />
                                    <p>Hospital Name: {facilities[0].name}  </p>
                                    <p>Fax Number: {facilities[0].urReviewFax}  </p>
                                    <p>Attention: <span>Case Management / Utilization Management</span> </p> <br />
                                    <p>We understand that our member may be receiving care at your facility. Please fax initial and/or concurrent clinical information to XXX. </p>
                                    <p>We will conduct our review promptly after receiving the requested clinical information</p>
                                    <p>A physician is always available on request if your treating physician wishes to take advantage of the opportunity to address our member's curent care needs, to provide access to our member's clinical history, and to discuss our member's care to ensure mutual understanding and agreement. Your physician may also choose to discuss our member's care and prior medical history with one of our case managers.</p> <br /> <br />
                                    <p> Thank you for your cooperation, </p>
                                    Case Management Department
                                </div>
                                <div>
                                    {patientClinRequests && (
                                        <div className="">
                                            <Table>
                                                <TableCaption></TableCaption>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[100px]">First</TableHead>
                                                        <TableHead>Last</TableHead>
                                                        <TableHead>DOB</TableHead>
                                                        <TableHead>Admit Date</TableHead>
                                                        <TableHead>KP MRN</TableHead>
                                                        {/* <TableHead className="text-right">Amount</TableHead> */}
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {patientClinRequests.map((patient) => (
                                                        <TableRow key={patient.mrn}>
                                                            <TableCell className="font-medium"> {patient.firstName} </TableCell>
                                                            <TableCell> {patient.lastName} </TableCell>
                                                            <TableCell>{patient.dob} </TableCell>
                                                            <TableCell > {patient.admitDate} </TableCell>
                                                            <TableCell className=""> {patient.mrn} </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            {/* <Button onClick={() => window.print()}>Print PDF</Button> */}
                                            <Button onClick={handlePrint}>Print PDF</Button>
                                            <style jsx>{`
                                    @media print {
                                        button { display: none; }
                                        /* Additional print styles */
                                    }
                                `}</style>
                                        </div>
                                    )}

                                </div>
                                <Button onClick={() => setIsPDFView(!isPDFView)} variant={"outline"} className=''>
                                    Back
                                </Button>
                            </div>
                        </DialogDescription>
                    </div>
                </DialogHeader>
            ) : (
                // textbox form
                <DialogHeader>
                    <DialogTitle> {facilities[0].name} </DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="clinReqPatients"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Textarea {...field} className='min-h-[250px]' />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='mt-4 flex justify-between'>
                                        <Button type='submit' className=''>
                                            Next
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            )}

        </>
    )
}

export default ClinicalRequestForm