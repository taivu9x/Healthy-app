import { Container } from '@/common/Container';
import React from 'react';

export const Categories = () => {
  const items = [
    {
      title: 'RECOMMENDED COLUMN',
      name: 'オススメ',
    },
    {
      title: 'RECOMMENDED DIET',
      name: 'ダイエット',
    },
    {
      title: 'RECOMMENDED BEAUTY',
      name: '美容',
    },
    {
      title: 'RECOMMENDED HEALTH',
      name: '健康',
    },
  ];
  return (
    <Container>
      <div className='flex gird grid-cols-4 gap-9 mb-3 mt-14'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col w-[216px] h-[144px] justify-center items-center bg-black text-white'>
            <div className='text-primary text-2xl text-center'>{item.title}</div>
            <hr className='w-14 my-2' />
            <div className='text-lg'>{item.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
