import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            TENHA O APLICATIVO EM SEU TELEFONE
          </h1>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <button className='bg-black text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Play Store
            </button>
            <button className='bg-black text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Apple Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
