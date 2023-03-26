import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Beyul</title>
        <meta
          name='description'
          content='Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project- Bigu Life Festival in Nepal within the summer of 2023.'
        />
        <meta
          name='vision'
          content='Beyül is a social enterprise initiated to realize this wonderfully rich country through tourism.
          Beyül has begun with a team of seekers hoping to find more in a quest to channelize the rising consciousness to uplift,
          preserve, sustain and conserve our country and the beauty in our people.'
        />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:title" content="Bigu Life Festival" />
        <meta
          property="og:description"
          content="Beyül is a destination development social enterprise based in London, UK.
            It is a start-up in its early stages of development. Employing guerrilla tactics,
            Beyül wants to dive into the market headfirst with bare minimal viable product available.
            This is in expectation of executing its first pilot project- Bigu Life Festival in Nepal within the summer of 2023."
        />
        <meta
          property="og:image"
          content="https://bigulifefestival.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.5ca4c178.jpg&w=1920&q=75"
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
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
    </>
  );
}

export default MyApp;
