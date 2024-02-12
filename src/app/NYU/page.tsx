import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <>
        <div className=" grid grid-cols-2 gap-4 justify-items-center py-20 ">
        <Image src='/crycat1.jpeg' width={300} height={300} alt="cat crying" />
        <Image src='/crycat2.jpeg' width={300} height={300} alt="cat crying" />
        <Image src='/crycat3.jpeg' width={300} height={300} alt="cat crying" />
        <Image src='/crycat4.jpeg' width={300} height={300} alt="cat crying" />
        </div>
        <div className="flex flex-col text-center gap-4">
        <p>
            my heart is broken and my day is ruined
        </p>
        <div>
        <Link href='/' className={buttonVariants()}> Try again</Link>
        </div> 
        </div>
        </>

    )
}