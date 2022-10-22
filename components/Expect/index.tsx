import React, { useState } from 'react';
import styles from '../../styles/Expect.module.css';
import Image, { StaticImageData } from 'next/image';

import bonfire from '../../public/assets/Expect/bonfire.png';
import camping from '../../public/assets/Expect/camping-trek.png';
import dining from '../../public/assets/Expect/dining.png';
import guide from '../../public/assets/Expect/guide.png';
import route from '../../public/assets/Expect/route.png';
import village from '../../public/assets/Expect/village.jpg';
import sceneries from '../../public/assets/Expect/sceneries.jpg';

const expectArr = [
  {
    src: camping,
    alt: 'Outdoor Camping',
  },
  {
    src: bonfire,
    alt: 'Campfire Every Night',
  },
  {
    src: dining,
    alt: 'Five Billion Star Winning and Dining',
  },
  {
    src: route,
    alt: 'Off the Map Trekking Route',
  },
  {
    src: guide,
    alt: 'Classy Guide and Security',
  },
  {
    src: sceneries, // NEED PNG
    alt: 'Breathtaking Sceneries',
  },
  {
    src: village, // NEED PNG
    alt: '75% of Money Goes to the Village',
  },
];

const renderItem = (key: number, src: StaticImageData, alt: string) => {
  return (
    <div className={styles.item} key={key}>
      <Image
        key={key}
        src={src}
        alt={alt}
        // layout='fill'
        objectFit='contain'
        height={300}
        width={300}
      />
      <p className={styles.description}>{alt}</p>
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
