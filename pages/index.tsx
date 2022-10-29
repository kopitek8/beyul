import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../components/Landing';
import Expect from '../components/Expect';
import Plan from '../components/Plan';
import Journey from '../components/Journey';
import SendToLab from '../components/SendToLab';
import JoinUs from '../components/JoinUs';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beyul</title>
        <meta name='description' content='Beyul website' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div>
        <Landing />
        <Expect />
        <Plan />
        <Journey />
        <SendToLab />
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
