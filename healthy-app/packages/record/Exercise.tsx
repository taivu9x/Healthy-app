import { Container } from '@/common/Container';
import React from 'react';

export const Exercise = () => {
  const listData = [
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
    {
      name: '家事全般（立位・軽い）',
      kcal: '26kcal',
      time: '10 min',
    },
  ];
  return (
    <Container className='bg-black px-6 py-3 w-[960px]'>
      <div
        className='flex justify-start items-center text-lg text-white py-1'
        style={{ fontWeight: 300 }}>
        <div className='uppercase light w-24'> My Exercise</div>
        <div className='text-xl'>2021.05.21</div>
      </div>
      <div className='grid grid-cols-2 gap-10 text-white'>
        <ul className='h-[264px] overflow-y-scroll scrollable'>
          {listData.map((item, index) => (
            <li
              key={index}
              className='flex justify-between border-b-[1px] border-b-[#777777] pb-[1px] mr-1'>
              <div className='flex items-start before:content-["・"] before:mr-2'>
                <div className='flex flex-col'>
                  {item.name}
                  <p className=' text-primary'>{item.kcal}</p>
                </div>
              </div>
              <div className=' float-right items-start text-primary text-lg'>{item.time}</div>
            </li>
          ))}
        </ul>
        <ul className='h-[264px] overflow-y-scroll '>
          {listData.map((item, index) => (
            <li
              key={index}
              className='flex justify-between border-b-[1px] border-b-[#777777] pb-[1px] mr-1'>
              <div className='flex items-start before:content-["・"] before:mr-2'>
                <div className='flex flex-col'>
                  {item.name}
                  <p className=' text-primary'>{item.kcal}</p>
                </div>
              </div>
              <div className=' float-right items-start text-primary text-lg'>{item.time}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
