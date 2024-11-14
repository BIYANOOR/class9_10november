import Image from "next/image";

const HeroSection = () => {
    return (
        <main className="p-10 content-wrapper">
            <div className="flex gap-8 mx-10 mb-10">

                <div className="w-1/2 p-4 rounded-lg shadow-md flex flex-col items-center justify-center relative" style={{ height: '400px' }}>
                    <h6>Governor Sindh</h6>
                    <br />
                    <h3>Kamran Khan Tessori</h3>
                    <br />
                    <h2>Certified Cloud 
                    <br />
                     Applied Generative AI 
                    <br />
                    Engineer (GenEng)</h2>
                    <br />
                    <h3> Earn up to $5,000  month <br />
                    </h3>
                    <br />
                    <h2> Now admissions are open</h2>
                    <br />
                    <h2>in Hyderabad</h2>
                    </div>
                
                <div className="w-1/2 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/sir.png" 
                        alt="Governor Sindh" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
            </div>
            



<div  className="w-1/2 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>

</div>  
                   


            <div className="flex gap-8 mx-10 mb-10">
                <div className="w-1/2 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/R1i2.jpg" 
                        alt="Image 2" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
                <div className="w-1/2 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/R1i3.jpg" 
                        alt="Image 3" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
            </div>

            <div className="flex gap-8 mx-10">
                <div className="w-1/3 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/R2i1.jpg" 
                        alt="Image 4" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
                <div className="w-1/3 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/R2i2.jpg" 
                        alt="Image 5" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
                <div className="w-1/3 p-4 rounded-lg shadow-md flex items-center justify-center relative" style={{ height: '400px' }}>
                    <Image 
                        src="/Images/R1i3.jpg" 
                        alt="Image 6" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
            </div>
        </main>
    )
}

export default HeroSection;
