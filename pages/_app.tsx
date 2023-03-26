import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <ToastContainer
        position="bottom-right"
        closeOnClick
        draggable
        autoClose={3000}
      />
    </Layout>
  );
}

export default MyApp;
