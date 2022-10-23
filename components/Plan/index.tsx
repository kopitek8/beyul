import React from 'react';
import styles from '../../styles/Plan.module.css';
import Image from 'next/image';

import paper from '../../public/assets/Plan/burn-paper.png';

const Plan: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2>the plan</h2>
        <span className={styles.content}>
          We take you through a revolution where you are breaking through your
          spanhysical struggle, navigating the Gaurishankar Conservation Area
          crossing threshold after threshold, Kalinchowk to Seti, achieving
          inner and outer feats, submerged in earthly delights in a state of
          bliss, following myths (transcendence) on a 16th century salt route,
          witnessing the creator&apos;s manifestation in the people, the
          culture, the silent ways of the ancient, ultimately, recognizing the
          divine in us and all around with a rapture of being alive. You will be
          a visiting diety in the Bigu village, and you will know with the way
          they treat you, its hospitality, comes out of recognition, with Beyül,
          you will experience a festival of feelings within and around, with the
          ways of the modern and the ancient, in harmony.
        </span>
      </div>
    </div>
  );
};

export default Plan;
