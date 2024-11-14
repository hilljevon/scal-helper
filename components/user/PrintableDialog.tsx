import React, { useRef } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '../ui/button';

interface Facility {
    name: string;
    urReviewFax: string;
}

interface PatientClinRequest {
    firstName: string;
    lastName: string;
    dob: string;
    admitDate: string;
    mrn: string;
}

interface PrintableDialogProps {
    currentDate: string;
    facilities: Facility[];
    patientClinRequests: PatientClinRequest[];
    isPDFView: boolean;
    setIsPDFView: (value: boolean) => void;
}

const PrintableDialog: React.FC<PrintableDialogProps> = ({ currentDate, facilities, patientClinRequests, isPDFView, setIsPDFView }) => {
    const dialogContentRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        const content = dialogContentRef.current?.innerHTML;
        if (content) {
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                printWindow.document.write(`
          <html>
            <head>
              <title>Print Dialog Content</title>
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
        <Dialog>
            <DialogTrigger>Open Dialog</DialogTrigger>
            <DialogContent ref={dialogContentRef}>
                <DialogHeader>
                    <DialogTitle>Print Preview</DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <div className="flex justify-center items-center my-2">
                                <Image src="/images/kp_logo.webp" width={100} height={100} alt="logo" />
                            </div>
                            <div className="text-xs">
                                <p>Date: {currentDate}</p><br />
                                <p>Hospital Name: {facilities[0].name}</p>
                                <p>Fax Number: {facilities[0].urReviewFax}</p>
                                <p>Attention: <span>Case Management / Utilization Management</span></p><br />
                                <p>We understand that our member may be receiving care at your facility. Please fax initial and/or concurrent clinical information to XXX.</p>
                                <p>We will conduct our review promptly after receiving the requested clinical information.</p>
                                <p>A physician is always available on request if your treating physician wishes to take advantage of the opportunity to address our member's current care needs...</p><br /><br />
                                <p>Thank you for your cooperation,</p>
                                <p>Case Management Department</p>
                            </div>

                            {patientClinRequests && (
                                <div>
                                    <Table>
                                        <TableCaption></TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">First</TableHead>
                                                <TableHead>Last</TableHead>
                                                <TableHead>DOB</TableHead>
                                                <TableHead>Admit Date</TableHead>
                                                <TableHead>KP MRN</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {patientClinRequests.map((patient) => (
                                                <TableRow key={patient.mrn}>
                                                    <TableCell className="font-medium">{patient.firstName}</TableCell>
                                                    <TableCell>{patient.lastName}</TableCell>
                                                    <TableCell>{patient.dob}</TableCell>
                                                    <TableCell>{patient.admitDate}</TableCell>
                                                    <TableCell>{patient.mrn}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}

                            <Button onClick={handlePrint}>Print PDF</Button>
                            <Button onClick={() => setIsPDFView(!isPDFView)} variant="outline">
                                Back
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PrintableDialog;
