import { Article } from '@/common/Article';
import { Container } from '@/common/Container';
import React from 'react';

export const Articles = () => {
  const items = [
    {
      img: '/images/column-1.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-2.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-3.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-4.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
  ];
  const items2 = [
    {
      img: '/images/column-5.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-6.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-7.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
    {
      img: '/images/column-8.jpg',
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',

      tags: ['魚料理', '和食', 'DHA'],
    },
  ];
  return (
    <Container>
      <div className='flex gird grid-cols-4 gap-2 mb-3 mt-14'>
        {items.map((item, index) => (
          <Article key={index} item={item}></Article>
        ))}
      </div>
      <div className='flex gird grid-cols-4 gap-2 mb-3 mt-14'>
        {items2.map((item, index) => (
          <Article key={index} item={item}></Article>
        ))}
      </div>
    </Container>
  );
};
