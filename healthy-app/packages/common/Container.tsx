import classNames from 'classnames';
import React, { ReactNode } from 'react';

export const Container = ({ children, className }: { children: ReactNode; className?: any }) => {
  return (
    <div className={classNames(' max-w-[960px] font-[300] mx-auto', className)}>{children}</div>
  );
};
