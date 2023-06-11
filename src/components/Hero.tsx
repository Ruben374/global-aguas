const Fade = require("react-reveal/Fade")
import React from 'react';
const Water = require('react-water-wave');
export default function Hero() {
  return (

    <div className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.jpg')] "
        style={{ zIndex: -1 }}
      ></div>
      <div className="bg-blue-400 bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
        <Fade left>
          <div className="max-w-[800px] w-full mx-auto text-center">
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-5xl text-xl font-bold py-4 text-white">
                Distribuição de água ao domicílio por cisterna
              </p>
            </div>
            <p className="md:text-2xl text-xl text-white">Ficar sem água? Nunca mais.</p>
            <button className="w-[170px] rounded-md font-medium my-6 mx-auto py-3 text-white border-2">
              Começar
            </button>
          </div>
        </Fade>
      </div>
    </div>


  );
}
