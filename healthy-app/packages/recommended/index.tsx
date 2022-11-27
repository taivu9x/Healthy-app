import { Button } from '@/common/Button';
import { LayoutPublic } from '@/layout/LayoutPublic';
import React from 'react';
import { Articles } from './Articles';
import { Categories } from './Categories';

export const Recommended = () => {
  return (
    <LayoutPublic>
      <Categories></Categories>
      <Articles></Articles>
      <Button text='コラムをもっと見る' />
    </LayoutPublic>
  );
};
