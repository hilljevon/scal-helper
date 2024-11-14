"use client"

import { FacilityType } from "@/lib/data"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"


export const columns: ColumnDef<FacilityType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {

            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },

    },

    {
        accessorKey: "address",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-blue-500 hover:text-white rounded-xl"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.address)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.address}
                </Button>
            )
        },
        header: "Address"
    },
    {
        accessorKey: "mainline",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-yellow-300 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.mainline)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.mainline}
                </Button>
            )
        },
        header: "Main Line"
    },
    {
        accessorKey: "medicalRecords",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-green-300 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.medicalRecords)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.medicalRecords}
                </Button>
            )
        },
        header: "Medical Records"
    },
    {
        accessorKey: "urReview",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-orange-400 rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.urReview)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.urReview}
                </Button>
            )
        },
        header: "UR Review"
    },
    {
        accessorKey: "urReviewFax",
        cell: ({ row }) => {
            const facility = row.original
            return (
                <Button
                    variant="ghost"
                    className="hover:bg-purple-400 hover:text-white rounded-xl p-2"
                    onClick={() => {
                        navigator.clipboard.writeText(facility.urReviewFax)
                        toast.success("Copied to clipboard")
                    }}
                >
                    {facility.urReviewFax}
                </Button>
            )
        },
        header: "UR Fax"
    },
    {
        accessorKey: "admitting",
        header: "Admitting"
    },
]
