import React from 'react';
export type Record = {
  name: string;
  img: string;
  textButton: string;
};

export const BoxRecord = ({ data }: { data: Record }) => {
  return (
    <div
      className='border border-[24px] border-primary-300 w-72 h-72 bg-cover'
      style={{ backgroundImage: `url(${data.img})` }}>
      <div
        className='w-full h-full bg-bla flex flex-col justify-center items-center'
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <p className='text-primary text-lg'>{data.name}</p>
        <button className='w-[160px] bg-primary text-white'>{data.textButton}</button>
      </div>
    </div>
  );
};
