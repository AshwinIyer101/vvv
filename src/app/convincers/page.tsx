import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const cute = [
    '/IMG_0058.jpg',
    '/IMG_1274.jpg',
    '/IMG_1661.jpg',
    '/IMG_1673.jpg',
    '/IMG_2157.jpg',
    '/IMG_2258.jpg',
    '/IMG_2336.jpg',
    '/IMG_2769.jpg',
    '/IMG_3609.jpg',
    '/IMG_3703.jpg',
    '/IMG_3864.jpg',
    '/IMG_3941.jpg',
    '/IMG_5392.jpg',
    '/IMG_6375.jpg',
    '/IMG_7062.jpg',
    '/IMG_8234.jpg',
    '/IMG_8781.jpg',
    '/IMG_8959.jpg'
];

export default function Home() {
    return(
     <>
     <div className="flex flex-col text-center py-10">
        <p className="font-bold text-3xl text-primary">
            KIND CRAZY TO NEED TO BE CONVINCED DONT U THINK?????
        </p>
        <p> Its ok, im used to the abuse, heres a slide show of some classic jushwin moments</p>
     </div>
     <ParallaxScroll images={cute} />
     <div className="border-gray-700 bg-gray-200">
     <div className="flex text-center justify-center py-20">
     <p className="font-bold text-center"> Still not convinced?</p>
     </div>
     <div className="flex justify-center border-gray-700 bg-gray-200">
        <Accordion type="single" collapsible className=" justify-center w-2/4">
        <AccordionItem value="item-1">
            <AccordionTrigger>Are there any downsides to this offer?</AccordionTrigger>
            <AccordionContent>
            None, litterally nothing, best deal ever.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>Whats my ROI on this date looking like?</AccordionTrigger>
            <AccordionContent>
            4000000000000000000000000000 million percent
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>Are there any positives to me going on this date?</AccordionTrigger>
            <AccordionContent>
            Yes. All of the positives.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </div>
    </div>
    <div className=" flex flex-col justify center text-center py-20">
        <p className=" text-3xl font-bold text-primary ">
        So stop waiting and say yes!
        </p>
        <div className="flex gap-4 justify-center py-5">
        <Link href='/yayers' className={buttonVariants()}> YES!!! </Link>
        
        
        
        <Link href='/NYU' className={buttonVariants({variant:'destructive'})}>nah</Link>
        </div>
    </div>
     </>
    )
}
