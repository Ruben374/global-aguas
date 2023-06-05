import React from 'react';

const Cards = () => {
    return (
        <div className='w-full py-[6rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/*  <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Basico</h2>
                    <p className='text-center text-4xl font-bold'>Gratis</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Crie até 5 formulários</p>
                        <p className='py-2 border-b mx-8'>Gerar 100 relatórios mensais</p>

                    </div>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Escolher o Plano</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    {/*    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Profissional</h2>
                    <p className='text-center text-4xl font-bold'>19.500 AKZ/mês</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'> Crie até 20 formulários</p>
                        <p className='py-2 border-b mx-8'>Gerar 2500 relatórios mensais</p>
                        <p className='py-2 border-b mx-8'>Gerenciar uma equipe de até 5 pessoas</p>
                    </div>
                    <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Escolher o Plano</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/*     <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Final</h2>
                    <p className='text-center text-4xl font-bold'>27.350 AKZ/mês</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>  Crie até 20 formulários</p>
                        <p className='py-2 border-b mx-8'>Gerar 2500 relatórios mensais</p>
                        <p className='py-2 border-b mx-8'>Gerenciar uma equipe de até 5 pessoas</p>

                    </div>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Ecolher o Plano</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
