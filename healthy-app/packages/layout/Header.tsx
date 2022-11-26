import { Icon, IconName } from '@/Icon';
import Menu from '../Icon/icons/menu.svg';
import React, { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const buttonMenu = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const navs = [
    {
      name: 'memo',
      text: '自分の記録',
      href: '#',
    },
    {
      name: 'challenge',
      text: 'チャレンジ',
      href: '#',
    },
    {
      name: 'info',
      text: 'お知らせ',
      href: '#',
    },
  ];

  const handleHoverRing = () => {
    setIsHovering(prevState => !prevState);
  };
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ml-32'>
          <a href='https://flowbite.com' className='flex items-start'>
            <img src='/images/logo.png' className='mr-3 h-6 sm:h-9' alt='Healthy Logo' />
          </a>
          <div className='justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              {navs.map((nav, index) => (
                <li key={index}>
                  <a
                    href={nav.href}
                    className='flex py-2 pr-4 pl-3 text-base text-white rounded dark:text-white justify-center items-center'
                    aria-current='page'>
                    <Icon name={nav.name as IconName} size={30} className='mr-2'></Icon>
                    {nav.text}
                  </a>
                </li>
              ))}
              <li>
                <div className='py-2 cursor-pointer'>
                  <Menu
                    className='hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                    size={30}
                    data-collapse-toggle='mobile-menu'
                    type='button'
                    onClick={handleHoverRing}
                  />
                  {isHovering && (
                    <ul
                      id='mobile-menu'
                      className='absolute top-16 right-0 text-left w-72 bg-gray-700 border border-b-1'>
                      {navs.map((nav, index) => (
                        <li key={index}>
                          <a
                            href={nav.href}
                            className='flex p-8 text-base justify-start border-b-2 border-b-gray-500'
                            aria-current='page'>
                            {nav.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
