import { Button } from '@/common/Button';
import { Hexagon } from '@/common/hexagon';
import { Icon, IconName } from '@/Icon';
import { data } from 'autoprefixer';
import classNames from 'classnames';
import React from 'react';

export const Meal = () => {
  const meals = [
    {
      icon: 'knife',
      name: 'Morning',
    },
    {
      icon: 'knife',
      name: 'Lunch',
    },
    {
      icon: 'knife',
      name: 'Dinner',
    },
    {
      icon: 'cup',
      name: 'Snack',
    },
  ];

  const schedule = [
    {
      date: '26.10.',
      meal: [
        { img: '/images/m01.jpg', name: 'Morning' },
        { img: '/images/l03.jpg', name: 'Lunch' },
        { img: '/images/d01.jpg', name: 'Dinner' },
        { img: '/images/l01.jpg', name: 'Snack' },
      ],
    },
    {
      date: '25.10.',
      meal: [
        { img: '/images/m01.jpg', name: 'Morning' },
        { img: '/images/l02.jpg', name: 'Lunch' },
        { img: '/images/d02.jpg', name: 'Dinner' },
        { img: '/images/s01.jpg', name: 'Snack' },
      ],
    },
  ];
  return (
    <div className='max-w-screen-lg'>
      <div className='grid grid-cols-4 my-5 justify-between items-center'>
        {meals.map((meal, index) => (
          <Hexagon key={index}>
            <Icon size={56} name={meal.icon as IconName}></Icon>
            <p className='text-white text-lg'>{meal.name}</p>
          </Hexagon>
        ))}
      </div>
      {schedule.map(date => (
        <div className='grid grid-cols-4 gap-2 relative'>
          {date.meal.map(meal => (
            <div
              style={{ backgroundImage: `url(${meal.img})` }}
              className={classNames('text-white w-[232px] h-[232px] relative')}>
              <div className='text-white w-32 h-8 absolute bottom-0 left-0 p-2 bg-primary'>
                {date.date}
                {meal.name}
              </div>
            </div>
          ))}
        </div>
      ))}

      <Button text='記録をもっと見る'></Button>
    </div>
  );
};
