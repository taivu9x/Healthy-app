import { Button } from '@/common/Button';
import { LayoutPublic } from '@/layout/LayoutPublic';
import React from 'react';
import { Exercise } from './Exercise';
import { Function } from './Function';
import { MyDiary } from './MyDiary';

export const Record = () => {
  return (
    <LayoutPublic>
      <Function />
      <Exercise />
      <MyDiary />
      <Button text='記録をもっと見る' />
    </LayoutPublic>
  );
};
