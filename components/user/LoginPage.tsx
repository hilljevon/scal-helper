'use client'
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
const acceptableNUIDS = [
    "E651821"
]
const formSchema = z.object({
    nuid: z.string().min(2, {
        message: "NUID does not match our records",
    }),
})
export function LoginPage({ validatedState }: { validatedState: boolean }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nuid: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (acceptableNUIDS.includes(values.nuid)) {
            console.log("True")
            router.push("/validated")
        }
    }
    return (
        <div className="h-screen w-screen items-center justify-center flex">
            <Card className="mx-auto max-w-lg ">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your NUID
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} action="">
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="nuid"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>NUID</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="NUID" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    Please enter your NUID
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
