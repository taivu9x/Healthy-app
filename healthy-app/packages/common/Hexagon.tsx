import { ReactNode } from 'react';

export const Hexagon = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[url("/images/hexagon.png")] bg-no-repeat w-[116px] h-[135px] flex flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
};
