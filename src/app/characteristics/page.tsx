import Banner from "@/components/Banner";
//const Fade = require("react-reveal/Fade")
export default function Characteristics() {
    return (
        <>
            <Banner title="Global Águas" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <div className="flex flex-col md:flex-row flex-wrap justify-between px-16">
                <div className='flex flex-row items-center  mb-20 gap-x-64'>
                    <div className='flex flex-col items-start gap-y-4 text-left w-2/3 '>
                        <span className="text-lg font-bold">Comunique-se perfeitamente</span>
                        <span className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae totam perferendis et ex quaerat? Consequuntur iste aut alias totam dolore laborum placeat ullam esse fugit. Sed ex ipsa non?
                        </span>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-medium px-6 py-4'>
                            Baixar Agora
                        </button>
                    </div>

                  
                        <div className='w-2/3'>
                            <img src="/IPHONE-GLOBAL.png" />
                        </div>
                   
                </div>
                <div className='flex flex-row items-center  mb-20 gap-x-44'>
                
                        <div className='w-2/3'>
                            <img src="/polo-global.png" />
                        </div>
                
                    <div className='flex flex-col items-start gap-y-4 text-left w-2/3 '>
                        <span className="text-lg font-bold">Colete feedback</span>
                        <span className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae totam perferendis et ex quaerat? Consequuntur iste aut alias totam dolore laborum placeat ullam esse fugit. Sed ex ipsa non?
                        </span>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-medium px-6 py-4'>
                            Baixar Agora
                        </button>
                    </div>


                </div>


            </div>

        </>
    )
}