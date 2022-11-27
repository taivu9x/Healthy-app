import { BoxRecord, Record } from '@/common/BoxRecord';
import { Container } from '@/common/Container';
import React from 'react';

export const Function = () => {
  const records: Record[] = [
    {
      name: 'BODY RECORD',
      textButton: '自分のカラダの記録',
      img: '/images/MyRecommend-1.jpg',
    },
    {
      name: 'MY EXERCISE',
      textButton: '自分の運動の記録',
      img: '/images/MyRecommend-2.jpg',
    },
    {
      name: 'MY DIARY',
      textButton: '自分の日記',
      img: '/images/MyRecommend-3.jpg',
    },
  ];
  return (
    <Container className='m-10'>
      <div className='grid grid-cols-3 gap-10'>
        {records.map((record, index) => (
          <BoxRecord key={index} data={record}></BoxRecord>
        ))}
      </div>
    </Container>
  );
};
