import { ValidatedMainPage } from '@/components/user/ValidatedMainPage'
import React from 'react'
const page = () => {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Transfer tool</h1>
                {/* <div className='flex mx-auto'>
                    <h1>Insert Facility Breadcrumb Here</h1>
                </div> */}
            </header>
            <ValidatedMainPage />
        </>
    )
}

export default page