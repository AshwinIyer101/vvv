import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";



export default function Home() {
  return (
    
   <>
    <div className="h-screen flex flex-col ">
      <div className="flex justify-center pt-20 pb-10"> <h1 className=" text-4xl font-bold tracking-tight ">Happy valentines {' '}
      <span className=" text-primary"> 
      Julia
      </span>
      !
      </h1> 
      </div>
      <div className=" flex flex-col justify-center text-center">
      <p className=" text-muted-foreground text-large justify-center">
        This my official valentines request for you to be my little daters &quot;insert smiley face here&quot;.
      </p>
      <h1 className="font-bold">
        Will you do me the honor of being my valentine?
      </h1>
      </div>
      <div className="flex justify-center mt-5 gap-4">
        
        <Link href='/yayers' className={buttonVariants()}> YES!!! </Link>
        
        <Link href='/convincers' className={buttonVariants({variant:'outline'})}>I need convincing</Link>
        
        <Link href='/NYU' className={buttonVariants({variant:'destructive'})}>nah</Link>
        
      </div>
    </div>
    
   
   </>
  );
}
