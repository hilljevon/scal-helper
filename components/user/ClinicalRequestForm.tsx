"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "../ui/textarea"
import { Button } from '../ui/button'
import { PDFViewer } from '@react-pdf/renderer'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import dynamic from "next/dynamic";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import PrintPage from './PrintPage'
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
const ReactPDFRenderer = dynamic(() => import("./ReactPDFRenderer"), { ssr: false });

const ClinicalRequestForm = ({ facilities }: { facilities: any[] }) => {
    const dialogContentRef = useRef<HTMLDivElement>(null);
    const [isPDFView, setIsPDFView] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    const [patientClinRequests, setPatientClinRequests] = useState<any[]>([])
    const [currentDate, setCurrentDate] = useState<string>("")
    useEffect(() => {
        const date = new Date(Date.now()).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        });
        setCurrentDate(date)
    }, [])
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Inside onsubmit function")
        const splitArrays = (data.clinReqPatients.split("\n"))
        const newStrings = splitArrays.map((s: string) => {
            return s.split("\t")
        })
        const allRequests = []
        for (let i = 0; i < newStrings.length; i++) {
            const patientReq = {
                firstName: newStrings[i][0],
                lastName: newStrings[i][1],
                dob: newStrings[i][2],
                mrn: newStrings[i][3],
                admitDate: newStrings[i][8]
            }
            allRequests.push(patientReq)
        }
        setPatientClinRequests(allRequests)
        setIsPDFView(() => !isPDFView)
    }
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