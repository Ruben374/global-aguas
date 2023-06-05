"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed flex justify-between items-center w-screen text-white px-16 z-10 ${scrollPosition > 200 ? 'bg-blue-300 bg-opacity-90' : ''}`}>
      <div className='text-3xl text-white font-bold'>
        <img src="/LOGO.png" className='h-10 w-10' alt='Logo' />
      </div>
      <ul className='hidden md:flex text-md'>
        <Link href='/' passHref>
          <li className={`p-3 ${window.location.pathname === '/' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>
            Pagina Inicial
          </li>
        </Link>
        <Link href='/characteristics' passHref>
          <li className={`p-3 ${window.location.pathname === '/characteristics' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>
            Caracteristicas
          </li>
        </Link>
        <Link href='/prices' passHref>
          <li className={`p-3 ${window.location.pathname === '/prices' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>
            Preços
          </li>
        </Link>
        <Link href='/blog' passHref>
          <li className={`p-3 ${window.location.pathname === '/blog' ? 'opacity-100' : 'opacity-50'} hover:opacity-100 `}>
            Blog
          </li>
        </Link>
        <Link href='/contact' passHref>
          <li className={`p-3 ${window.location.pathname === '/contact' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>
            Contactos
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-r from-cyan-500  to-blue-500 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='p-4 border-b border-gray-600'>Pagina Inicial</li>
        <li className='p-4 border-b border-gray-600'>Caracteristicas</li>
        <li className='p-4 border-b border-gray-600'>Preços</li>
        <li className='p-4 border-b border-gray-600'>Blog</li>
        <li className='p-4'>Contactos</li>
      </ul>
    </div>
  );
};

export default Navbar;
