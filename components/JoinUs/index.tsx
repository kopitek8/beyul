import React from 'react';
import styles from '../../styles/JoinUs.module.css';

import skill from '../../public/assets/JoinUs/skill.png';

import renderItem from '../Reusable/ImageDescription';

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
