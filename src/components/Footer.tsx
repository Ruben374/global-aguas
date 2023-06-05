import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <div className='w-full text-3xl font-bold text-[#00df9a]'>
          <img src="/LOGO.png" className='h-16 w-16' />
        </div>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaLinkedinIn size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Navigação</h6>
          <ul>
            <li className='py-2 text-sm'>Preço</li>
            <li className='py-2 text-sm'>Características</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Contactos</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Services</h6>
          <ul>
            <li className='py-2 text-sm'>Equipa</li>
            <li className='py-2 text-sm'>Colaboração</li>
            <li className='py-2 text-sm'>Todos</li>
            <li className='py-2 text-sm'>Eventos</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Downloads</h6>
          <ul>
            <li className='py-2 text-sm'>Obter apartir App Store</li>
            <li className='py-2 text-sm'>Obter apartir Play Store</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
