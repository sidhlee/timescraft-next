import Head from 'next/head';
import { useAppSelector } from '../app/hooks';
import SEO from '../components/seo/SEO';
import Gameplay from '../features/gameplay/Gameplay';
import StartScreen from '../features/startScreen/StartScreen';

export default function Home() {
  const currentTable = useAppSelector((state) => state.gameplay.currentTable);

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
        {!currentTable && <StartScreen />}
        {currentTable && <Gameplay />}
      </main>
    </>
  );
}
