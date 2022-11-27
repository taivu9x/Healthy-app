import React from 'react';

export const Button = ({ text }: { text: string }) => {
  return (
    <div className='flex justify-center mt-9 mb-16'>
      <button className='text-white bg-gradient-to-b from-orange-300 to-primary w-72 py-4 rounded-md'>
        {text}
      </button>
    </div>
  );
};
