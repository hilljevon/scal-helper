import { columns } from '@/components/user/Columns'
import { DataTable } from '@/components/user/Data-Table'
import { facilities } from '@/lib/data'
import React from 'react'
const page = () => {
    return (
        <>
            <header className="top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Directory</h1>
            </header>
            <div className='container mx-auto py-6'>
                <DataTable columns={columns} data={facilities} />
            </div>
        </>
    )
}

export default page