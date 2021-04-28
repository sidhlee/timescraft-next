import Head from 'next/head';
import SEO from '../components/seo/SEO';
import StartScreen from '../features/startScreen/StartScreen';

export default function Home() {
  return (
    <>
      <Head>
        <SEO />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&family=VT323&display=swap"
          rel="stylesheet"
        />
        {/*  CSS  */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main id="main" className="app-container">
        <StartScreen />
      </main>
    </>
  );
}
