import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Banner = () => {
  return (
    <div className='grid grid-cols-7 h-80 w-full overflow-hidden max-w-screen-xl'>
      <div className='col-span-3 back bg-[url("/images/d01.jpg")] bg-center flex justify-center items-center'>
        <div className='w-44 h-44 '>
          <CircularProgressbarWithChildren
            value={75}
            className='w-44 h-44 text-white'
            strokeWidth={1}
            styles={buildStyles({
              backgroundColor: '#3e98c7',
              textColor: '#fff',
              pathColor: '#fff',
              trailColor: 'transparent',
            })}>
            <div className='text-white'>
              05/12<span className=' text-lg'> 75%</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className='col-span-4 bg-black py-2 px-10'>
        <img src='/images/main_graph.png' alt='' />
      </div>
    </div>
  );
};
