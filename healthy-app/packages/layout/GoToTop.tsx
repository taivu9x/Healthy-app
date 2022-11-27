import React from 'react';

export const GoToTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <img
      onClick={handleScrollTop}
      src='/images/scroll.png'
      width='48'
      height='48'
      className=' fixed bottom-36 right-24  cursor-pointer'></img>
  );
};
