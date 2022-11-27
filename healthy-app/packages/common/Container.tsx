import classNames from 'classnames';
import React, { ReactNode } from 'react';

export const Container = ({ children, className }: { children: ReactNode; className?: any }) => {
  return <div className={classNames('max-w-screen-xl font-[300]', className)}>{children}</div>;
};
