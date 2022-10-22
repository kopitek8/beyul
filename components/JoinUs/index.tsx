import React from 'react';
import styles from '../../styles/JoinUs.module.css';
import Image from 'next/image';

import skill from '../../public/assets/JoinUs/skill.png';

const expectArr = [
  {
    src: skill,
    alt: 'Nominate Your Village',
  },
  {
    src: skill,
    alt: 'Skill Share',
  },
];

const renderItem = (key, src, alt) => {
  return (
    <div className={styles.item}>
      <Image
        key={key}
        src={src}
        alt={alt}
        objectFit='contain'
        height={300}
        width={300}
      />
      <p className={styles.description}>{alt}</p>
    </div>
  );
};

const JoinUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>be a part of beyül</h1>
      <div className={styles.imageContainer}>
        {expectArr.map((arr, key) => renderItem(key, arr.src, arr.alt))}
      </div>
    </div>
  );
};

export default JoinUs;
