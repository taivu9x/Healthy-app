import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export type LayoutProps = {
  children?: ReactNode;
};

export const LayoutPublic = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen container-xl'>
      <Header />
      <main className='flex flex-col items-center'>{children}</main>
      
      <Footer />
    </div>
  );
};
