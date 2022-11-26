import React from 'react';
import Close from './icons/close.svg';
import Challenge from './icons/challenge.svg';
import Menu from './icons/menu.svg';
import Info from './icons/info.svg';
import Memo from './icons/memo.svg';

const ICONS = {
  close: Close,
  challenge: Challenge,
  menu: Menu,
  info: Info,
  meno: Memo,
};

export type IconName = keyof typeof ICONS;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  name: IconName;
};

export const Icon = ({ name, size = 10, className, ...restProps }: IconProps) => {
  const Component = ICONS[name];

  return <Component className={className} width={size} height={size} {...restProps} />;
};
