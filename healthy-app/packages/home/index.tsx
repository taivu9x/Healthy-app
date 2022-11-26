import { LayoutPublic } from '@/layout/LayoutPublic';
import React from 'react';
import { Banner } from './Banner';
import { Meal } from './Meal';

export const Home = () => {
  return (
    <LayoutPublic>
      <Banner></Banner>
      <Meal></Meal>
    </LayoutPublic>
  );
};
