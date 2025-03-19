import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Ambulance,
  CassetteTapeIcon,
  CircleHelp,
  FileQuestion,
  Hospital,
  Info,
  MessageCircleQuestion,
  PhoneForwardedIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"

import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "SCAL-Helper",
  description: "SCAL Helper for Case Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid h-screen w-full pl-[56px]">
          <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div className="border-b p-2">
              <Button variant="outline" size="icon" aria-label="Home">
                <Hospital className="size-5" />
              </Button>
            </div>
            <nav className="grid gap-1 p-2">
              <TooltipProvider>
                <Link href={"/"}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg bg-muted"
                        aria-label="Playground"
                      >
                        <Ambulance className="size-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      Transfer tool
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </TooltipProvider>
              <TooltipProvider>
                <Link href={"/directory"}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Models"
                      >
                        <PhoneForwardedIcon className="size-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      Directory
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </TooltipProvider>
              <TooltipProvider>
                <Link href={"/stability"}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Models"
                      >
                        <MessageCircleQuestion className="size-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      Stability
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </TooltipProvider>
              <TooltipProvider>
                <Link href={"/help"}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg"
                        aria-label="Models"
                      >
                        <Info className="size-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={5}>
                      Info
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </TooltipProvider>
            </nav>
          </aside>
          <div className="flex flex-col">

            {children}
            <Toaster richColors position="bottom-left" />
          </div>
        </div>

      </body>
    </html>
  );
}
