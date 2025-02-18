"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    VisibilityState,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import * as React from "react"
import { facilities } from "@/lib/data"
import ClinicalRequestForm from "./ClinicalRequestForm"
import * as XLSX from "xlsx";
import { handleCaseAssignmentXls } from "@/lib/handleTransferData"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}
interface RowSelectionInterface {
    string: boolean
}
export function DataTable<TData, TValue>({ columns, data, }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [patients, setPatients] = React.useState<any[] | null>(null)
    const [rowSelection, setRowSelection] = React.useState<RowSelectionInterface | {} | any>({})
    // define facility selection later
    const [selectedFacilities, setSelectedFacilities] = React.useState<any[]>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        }
    })
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const binaryData = e.target?.result;
            if (binaryData) {
                const workbook = XLSX.read(binaryData, { type: "binary" });
                const ccrCaseWorksheet = workbook["Sheets"]["Details"]
                console.log("CCR Cases here", ccrCaseWorksheet)
                const res = handleCaseAssignmentXls(ccrCaseWorksheet)
                setPatients(res)
            }
        };
        reader.readAsBinaryString(file);
    }
    // Everytime a row selection is picked, we update state to reflect current selected facilities since row selection only stores an index.
    React.useEffect(() => {
        if (rowSelection && Object.keys(rowSelection).length > 0) {
            const allSelectedFacilities = []
            for (const facility in rowSelection) {
                const selectedFacility = facilities[Number(facility)]
                allSelectedFacilities.push(selectedFacility)
            }
            setSelectedFacilities(allSelectedFacilities)
        } else {
            setSelectedFacilities([])
        }
    }, [rowSelection])
    React.useEffect(() => {
        document.title = "Clinical Requests"
    }, [])
    return (
        <>
            <div className="flex items-center pb-8">
                <Input
                    placeholder="Filter Name"
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <div className="flex items-center w-full justify-center">
                    <input
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={handleFileUpload}
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-2xl border px-8 py-4">
                <Table className="text-sm">
                    <TableHeader className="text-start text-blue-600 font-geistSans font-extrabold">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className="" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead className="" colSpan={1} key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="space-x-2 text-start">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className="border p-2" key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected. */}

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="ml-8" variant={"default"} size={"sm"}>
                                Request
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-[700px] min-h-[600px] max-h-[80vh] overflow-y-auto">
                            {/* Conditional rendering depeding on if a facility is selected and if file is uploaded */}
                            {Object.keys(rowSelection).length > 0 && selectedFacilities && patients ? (
                                <ClinicalRequestForm facilities={selectedFacilities} patients={patients} />
                            ) : (
                                <DialogHeader>
                                    <DialogTitle>Error</DialogTitle>
                                    <DialogDescription>
                                        Please add case assignments file and select a facility.
                                    </DialogDescription>
                                </DialogHeader>
                            )}
                        </DialogContent>
                    </Dialog>
                </div>
                <div>

                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </>
    )
}
