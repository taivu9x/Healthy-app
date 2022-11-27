import { Container } from '@/common/Container';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4].map(item => item + ''),
      borderColor: '#8FE9D0',
      backgroundColor: 'rgba(143, 233, 108, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [15, 14.5, 12.5, 13.5, 11.5, 10.5, 9.5, 8.5, 7.5, 6.5, 5.5, 4.5].map(item => item + ''),
      borderColor: '#FFCC21',
      backgroundColor: 'rgb(255,204,33,0.5)',
    },
  ],
};

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  // responsive: true,
  scales: {
    x: {
      grid: {
        drawBorder: true,
        color: '#777777',
      },
      ticks: {
        color: 'white',
        fontSize: 12,
      },
    },
    y: {
      display: false,
    },
  },
};

export const Chart = () => {
  return (
    <Container className='mb-14 px-6 py-4 bg-black'>
      <div
        className='flex justify-start items-center text-lg text-white py-1'
        style={{ fontWeight: 300 }}>
        <div className='uppercase light w-24 leading-6'>Body record</div>
        <div className='text-xl'>2021.05.21</div>
      </div>
      <Line options={options} data={data} height='180' width='960' />
      <div className='mt-2'>
        <button className='bg-white text-primary rounded-full w-14 text-sm mr-3'>日</button>
        <button className='bg-white text-primary rounded-full w-14 text-sm mr-3'>週</button>
        <button className='bg-white text-primary rounded-full w-14 text-sm mr-3'>月</button>
        <button className='bg-primary text-white rounded-full w-14 text-sm mr-3'>年</button>
      </div>
    </Container>
  );
};
