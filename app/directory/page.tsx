"use client"

import { columns } from '@/components/user/Columns'
import { DataTable } from '@/components/user/Data-Table'
import { facilities } from '@/lib/data'
import React from 'react'

if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== 'undefined') {
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject
            const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
            })
            return { promise, resolve, reject }
        }
    } else {
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        global.Promise.withResolvers = function () {
            let resolve, reject
            const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
            })
            return { promise, resolve, reject }
        }
    }
}
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