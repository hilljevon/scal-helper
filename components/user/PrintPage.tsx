// PrintPage.tsx
"use client";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
interface PatientRequestInterface {
    firstName: string,
    lastName: string,
    dob: string,
    mrn: string,
    admitDate: string
}
const PrintPage = ({ requests }: { requests: PatientRequestInterface[] }) => {
    console.log("My requests here", requests)
    return (
        <h1>h</h1>
    )
};

export default PrintPage;
