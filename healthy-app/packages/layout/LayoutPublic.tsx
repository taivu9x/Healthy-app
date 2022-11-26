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
      <div className='flex flex-1 mt-[48px]'>
        <div className='flex flex-1'>
          <main className='flex justify-center w-full'>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
