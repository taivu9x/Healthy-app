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
    <footer>
      <div className='flex justify-between p-14 text-white dark:bg-gray-800'>
        {data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </footer>
  );
};
