import { Icon, IconName } from '@/Icon';
import Menu from '../Icon/icons/menu.svg';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/common/Container';

export const Header = () => {
  const buttonMenu = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const navs = [
    {
      name: 'memo',
      text: '自分の記録',
      href: '/',
    },
    {
      name: 'challenge',
      text: 'チャレンジ',
      href: 'record',
    },
    {
      name: 'info',
      text: 'お知らせ',
      href: 'recommended',
    },
  ];

  const subNavs = [
    {
      text: '自分の記録',
      href: '/',
    },
    {
      text: '体重グラフ',
      href: 'record',
    },
    {
      text: '目標',
      href: 'recommended',
    },
    {
      text: 'コラム一覧',
      href: 'recommended',
    },
    {
      text: '設定',
      href: 'recommended',
    },
  ];

  const handleHoverRing = () => {
    setIsHovering(prevState => !prevState);
  };
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <Container className='flex flex-wrap justify-between items-center'>
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
                <div className='py-2 cursor-pointer relative'>
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
                      className='absolute top-[58px] right-0 text-left w-72 bg-[#777777] text-white'>
                      {subNavs.map((nav, index) => (
                        <li key={index}>
                          <a
                            href={nav.href}
                            className='flex p-4 text-base justify-start border-b-[1px] border-b-gray-700 border-t-[1px] border-t-gray-600'
                            aria-current='page'
                            onClick={handleHoverRing}>
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
        </Container>
      </nav>
    </header>
  );
};
