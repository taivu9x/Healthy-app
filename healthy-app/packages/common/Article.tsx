import React from 'react';

export type TArticle = {
  img: string;
  date: string;
  time: string;
  desc: string;

  tags: string[];
};
export const Article = ({ item }: { item: TArticle }) => {
  return (
    <div className='w-[234px]'>
      <div className='flex flex-col w-full h-[144px] justify-center items-center text-white'>
        <div
          style={{ backgroundImage: `url(${item.img})` }}
          className='text-white w-[232px] h-[232px] relative bg-cover'>
          <div className='text-white w-[144px] h-6 absolute bottom-0 left-0 px-2 bg-primary-400'>
            {item.date} {item.time}
          </div>
        </div>
      </div>
      <div>{item.desc}</div>
      <div>
        {item.tags.map((tag, indexTag) => (
          <span className=' text-xs mr-[6px] text-orange-300' key={indexTag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
