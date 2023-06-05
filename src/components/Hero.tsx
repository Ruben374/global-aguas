import React from 'react';
const Fade = require("react-reveal/Fade")
const Hero2 = () => {
  return (
    <div className='text-white bg-gradient-to-r from-cyan-500 h-screen to-blue-500'>

      <Fade left>
        <div className='max-w-[800px] w-full h-full mx-auto text-center flex flex-col justify-center'>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-5xl text-xl font-bold py-4 text-white'>
              Distribuição de água ao domicílio por cisterna
            </p>
          </div>
          <p className='md:text-2xl text-xl text-white'>Ficar sem água? Nunca mais.</p>
          <button className='w-[170px] rounded-md font-medium my-6 mx-auto py-3 text-white border-2'>Começar</button>
        </div>
      </Fade>
    </div>
  );
};

export default Hero2;
