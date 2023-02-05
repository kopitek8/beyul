import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Help.module.css';

const Help: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Help</title>
                <meta name='description' content='Help page of Beyul website' />
                <link rel='icon' href='/favicon.png' />
            </Head>

            <div className={styles.contentContainer}>
                <div>
                    <h1 className={styles.header}>We&apos;re Happy To Help!</h1>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum commodi dolor asperiores voluptatum, quod corrupti impedit, tempora fugiat iure rerum minus illum ratione laborum, explicabo quidem optio magnam! Quod, rerum!</p>
                </div>
                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <div className={styles.boxContentContainer}>
                            <div>
                                <h4>Help Assistant</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <li>Bla bla bla bla bla</li>
                            <li>Bla bla bla bla bla</li>
                            <li>Bla bla bla bla bla</li>
                            <li>Bla bla bla bla bla</li>
                            <li>Bla bla bla bla bla</li>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.boxContentContainer}>
                            <div className={styles.faq}>
                                <h4>Frequently Asked Questions</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <Link href="/help">
                                <button onClick={() => console.log('FAQ clickd')} className={styles.button}>
                                    <span className={styles.content}>Visit FAQ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
