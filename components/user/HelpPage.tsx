"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { uaInfo } from '@/lib/info'

const HelpPage = () => {
    return (
        <>
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">Help Page</h1>
                <div className='flex mx-auto'>
                    <div className="relative hidden flex-col items-start gap-8 md:flex">
                        <div className="grid w-full items-start gap-6">
                            <div className="grid gap-6 rounded-lg p-2">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="grid gap-6 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                {uaInfo.map((info) => (
                    <div key={info.title} className='col-span-1'>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger> {info.title} </AccordionTrigger>
                                <AccordionContent>
                                    {info.desc.map((desc) => (
                                        <div key={desc.title}>
                                            <span className="font-bold">{desc.title}</span>: {desc.desc} <br />
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                ))}
            </main>
        </>
    )
}

export default HelpPage