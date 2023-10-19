import Image from 'next/image'
import React from 'react';
import { Inter } from 'next/font/google'
import Router from 'next/router'
import Page1 from '@/components/Page1';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';
import Page4 from '@/components/Page4';
import Page5 from '@/components/Page5';

const inter = Inter({ subsets: ['latin'] })

export const h1Styles = {
  color: '#1F1D26',
  fontFamily: 'sans-serif',
  letterSpacing: '2px',
  textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
};

export default function Home() {
  const goToCash = () => {
    Router.push("/cash");
  }

  return (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  )
}
