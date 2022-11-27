import { Button } from '@/common/Button';
import { LayoutPublic } from '@/layout/LayoutPublic';
import React from 'react';
import { Chart } from './Chart';
import { Exercise } from './Exercise';
import { Function } from './Function';
import { MyDiary } from './MyDiary';

export const Record = () => {
  return (
    <LayoutPublic>
      <Function />
      <Chart />
      <Exercise />
      <MyDiary />
      <Button text='記録をもっと見る' />
    </LayoutPublic>
  );
};
