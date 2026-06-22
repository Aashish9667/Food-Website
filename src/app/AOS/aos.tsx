
'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
 React.useEffect(() => {
     AOS.init({
       duration: 800, 
       once: true,
     });
   }, []);

  return null;
}