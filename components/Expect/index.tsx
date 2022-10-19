import React, { useState } from 'react';
import styles from '../../styles/Expect.module.css';
import Image from 'next/image';

import bonfire from '../../public/assets/Expect/bonfire.png';
import camping from '../../public/assets/Expect/camping-trek.png';
import dining from '../../public/assets/Expect/dining.png';
import guide from '../../public/assets/Expect/guide.png';

const expectArr = [
  {
    src: bonfire,
    alt: 'Campfire Every Night',
  },
  {
    src: camping,
    alt: 'Outdoor Camping',
  },
  {
    src: dining,
    alt: 'Five Billion Star Winning and Dining',
  },
  {
    src: guide,
    alt: 'Classy Guide and Security',
  },
  {
    src: bonfire,
    alt: 'Campfire Every Night',
  },
  {
    src: camping,
    alt: 'Outdoor Camping',
  },
  {
    src: dining,
    alt: 'Five Billion Star Winning and Dining',
  },
];

const renderItem = (key, src, alt) => {
  return (
    <div>
      <Image
        key={key}
        src={src}
        alt={alt}
        // layout='fill'
        objectFit='contain'
        height={300}
        width={300}
      ></Image>
      <p>{alt}</p>
    </div>
  );
};

const Expect: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>what to expect</h1>
      <div className={styles.imageContainer}>
        {expectArr.map((arr, key) => renderItem(key, arr.src, arr.alt))}
      </div>
    </div>
  );
};

export default Expect;
