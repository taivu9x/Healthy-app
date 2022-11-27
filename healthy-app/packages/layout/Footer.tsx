import { Icon, IconName } from '@/Icon';
import Menu from '../Icon/icons/menu.svg';
import React, { useState } from 'react';

export const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);
  const data = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ',
  ];

  return (
    <footer className='dark:bg-gray-800'>
      {/* <div className='mx-auto smax-w-screen-lg flex justify-between items-center p-14 text-white '> */}
      <div className='flex justify-between items-start mx-auto max-w-screen-lg text-white p-14	'>
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </footer>
  );
};
