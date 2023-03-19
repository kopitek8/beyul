import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Cloud.module.css';

import cloud15 from '../../public/assets/Clouds/cloud15.png';

const CloudLoader: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContainer}>
                <div className={styles.animateRight1}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateRight2}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateRight3}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateRight4}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateRight5}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateRight6}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft1}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft2}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft3}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft4}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft5}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
                <div className={styles.animateLeft6}>
                    <Image src={cloud15} alt={'Clouds'} />
                </div>
            </div>
        </div>
    );
};

export default CloudLoader;
