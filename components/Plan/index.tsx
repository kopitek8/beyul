import React from 'react';
import styles from '../../styles/Plan.module.css';

const Plan: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>the plan</h1>
        <span className={styles.content}>
          We take you through a revolution where you are breaking through your
          physical struggle navigating the Gaurishankar Conservation Area
          crossing threshold after threshold, Kalinchowk to Seti, achieving
          inner and outer feats, submerged in earthly delights in a state of
          bliss, following myths (transcendence) on a 16th Century Salt Route,
          witnessing the creator&apos;s manifestation in the people, the
          culture, the silent ways of the ancient, ultimately, recognizing the
          divine in us and all around with a rapture of being alive. You will be
          a visiting deity in the Bigu village, and you will know with the way
          they treat you, it&apos;s hospitality, comes out of recognition, with
          Beyül you experience a festival of feelings within and around, with
          the ways of the modern and the ancient, in harmony.
        </span>
      </div>
    </div>
  );
};

export default Plan;
