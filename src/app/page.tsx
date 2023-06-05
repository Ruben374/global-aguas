"use client"
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import './Home.css';
import Link from 'next/link';
import Hero from '@/components/Hero';

import Newsletter from '@/components/Newsletter';
import Content from '@/components/Content';
export default function Home() {
  const [showElements, setShowElements] = useState(false);

  /*  useEffect(() => {
     // Define um pequeno atraso para simular o carregamento da página
     const timeout = setTimeout(() => {
       setShowElements(true);
     }, 500);
 
     return () => clearTimeout(timeout);
   }, []); */

  return (
    <>
      <Hero />
    <Content/>
      <Newsletter />
    </>
  );
}
