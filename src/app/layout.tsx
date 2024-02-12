import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy valentines",
  description: "A valentines website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      
        <body className={cn('relative h-full font-sans antialiased bg-background', inter.className)}>
        <main className='flex-col flex min-h-screen relative'>
        <div className=' flex-grow flex-1'>
        {children}
        </div>
        </main>
        </body>
        
    </html>
  );
}
