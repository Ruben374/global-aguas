import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LightModeIcon from '@mui/icons-material/LightMode';
import GroupIcon from '@mui/icons-material/Group';
import TestimonialCarousel from './TestimonialCarousel';
const Fade = require("react-reveal/Fade")
const Zoom = require("react-reveal/Zoom")
export default function Content() {
    return (
        <section className='max-w-[1240px] mx-auto px-4 text-center flex flex-col justify-center mt-16 gap-y-16 '>

            <Fade bottom>
                <div className="flex justify-center">
                    <p className="md:w-2/3 lg:w-1/2 xl:w-1/3 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
                        Economize o seu tempo usando nosso app
                    </p>
                </div>
            </Fade>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col items-center justify-center mb-8 md:mb-0'>

                    <Fade bottom>
                        <div className='rounded-full w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 ... drop-shadow-2xl flex justify-center items-center'>
                            <SignalCellularAltIcon fontSize='large' sx={{ fontSize: 48 }} className='text-white' />
                        </div>
                        <p className='text-center'>Elegancia</p>
                        <p className='text-center'>
                            Ecomize o seu tempo usando nosso app
                        </p>
                    </Fade>


                </div>
                <div className='flex flex-col items-center justify-center mb-8 md:mb-0'>
                    <Fade bottom>
                        <div className='rounded-full w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 ... drop-shadow-2xl flex justify-center items-center'>
                            <LightModeIcon fontSize='large' sx={{ fontSize: 48 }} className='text-white' />
                        </div>
                        <p className='text-center'>Elegancia</p>
                        <p className='text-center'>
                            Ecomize o seu tempo usando nosso app
                        </p>
                    </Fade>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Fade bottom>
                        <div className='rounded-full w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 ... drop-shadow-2xl flex justify-center items-center'>
                            <GroupIcon sx={{ fontSize: 48 }} className='text-white' />
                        </div>
                        <p className='text-center'>Elegancia</p>
                        <p className='text-center'>
                            Ecomize o seu tempo usando nosso app
                        </p>
                    </Fade>

                </div>
            </div>

            <Zoom >
                <div className="flex justify-center">
                    <img src='TRUCK-GLOBAL.png' className='h-96 w-96 justify-self-auto' />
                </div>
            </Zoom>

            <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex flex-col items-start justify-center w-full sm:w-96 p-5 h-40 bg-white rounded-xl shadow-2xl'>
                    <p className="text-lg font-bold mb-2">01</p>
                    <p className="text-xl font-bold mb-1">Inscrever-se</p>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex flex-col items-start justify-center w-full sm:w-96 p-5 h-40 bg-white rounded-xl shadow-2xl'>
                    <p className="text-lg font-bold mb-2">01</p>
                    <p className="text-xl font-bold mb-1">Inscrever-se</p>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex flex-col items-start justify-center w-full sm:w-96 p-5 h-40 bg-white rounded-xl shadow-2xl'>
                    <p className="text-lg font-bold mb-2">01</p>
                    <p className="text-xl font-bold mb-1">Inscrever-se</p>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
                </div>
            </div>



            <div className='flex lg:flex-row flex-col items-center mb-20 gap-10'>
                <div className='flex flex-col items-start lg:gap-y-4 text-left w-2/3 a'>
                    <span className="text-lg font-bold">Comunique-se perfeitamente</span>
                    <span className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae totam perferendis et ex quaerat? Consequuntur iste aut alias totam dolore laborum placeat ullam esse fugit. Sed ex ipsa non?
                    </span>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-medium px-6 py-4'>
                        Baixar Agora
                    </button>
                </div>

                <Fade right>
                    <div className='w-2/3 b'>
                        <img src="/IPHONE-GLOBAL.png" />
                    </div>
                </Fade>
            </div>
            <div className='flex lg:flex-row flex-col items-center mb-20 gap-x-64'>
                <Fade left>
                    <div className='w-2/3 b'>
                        <img src="/polo-global.png" />
                    </div>
                </Fade>
                <div className='flex flex-col items-start gap-y-4 text-left w-2/3 a'>
                    <span className="text-lg font-bold">Comunique-se perfeitamente</span>
                    <span className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae totam perferendis et ex quaerat? Consequuntur iste aut alias totam dolore laborum placeat ullam esse fugit. Sed ex ipsa non?
                    </span>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md font-medium px-6 py-4'>
                        Baixar Agora
                    </button>
                </div>


            </div>
            <TestimonialCarousel />
        </section>

    )
}