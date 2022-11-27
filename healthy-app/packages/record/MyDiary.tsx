import { Container } from '@/common/Container';
import React from 'react';

export const MyDiary = () => {
  const items = [
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
  ];
  return (
    <Container>
      <div className='text-xl'>MY DIARY</div>
      <div className='flex gird grid-cols-4 gap-3 mb-3'>
        {items.map((item, index) => (
          <div key={index} className=' p-4 border border-black w-[231px] h-[231px] text-xs'>
            <div className=' text-lg leading-5 mb-2'>
              <p>{item.date}</p>
              <p>{item.time}</p>
            </div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
      <div className='flex gird grid-cols-4 gap-3 mb-3'>
        {items.map((item, index) => (
          <div key={index} className=' p-4 border border-black w-[231px] h-[231px] text-xs'>
            <div className=' text-lg leading-5 mb-2'>
              <p>{item.date}</p>
              <p>{item.time}</p>
            </div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
