export default function Home() {
    return (
        <>

        <div className="mx-auto text-center flex flex-col items-center max-w-3xl h-screen justify-center">
            <p className="text-bold text-2xl"> us on feb 14 </p>
             <div className=" pb-28 flex flex-col items-center">
            <video
        autoPlay
        loop
        
        playsInline
        // Optionally, fade in after the video is loaded
        style={{ width: '100%' }}
      >
        <source src="/Dancing_cats.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      </div>
        </>
        
    )
}