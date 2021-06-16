import Head from 'next/head';
import { useAppSelector } from '../app/hooks';
import SEO from '../components/seo/SEO';
import Gameplay from '../features/gameplay/Gameplay';
import Results from '../features/results/Results';
import StartScreen from '../features/startScreen/StartScreen';

export default function Home() {
  const screen = useAppSelector((state) => state.app.screen);
  let currentScreen;
  switch (screen) {
    case 'start': {
      currentScreen = <StartScreen />;
      break;
    }
    case 'play': {
      currentScreen = <Gameplay />;
      break;
    }
    case 'results': {
      currentScreen = <Results />;
      break;
    }
    default: {
      currentScreen = <StartScreen />;
    }
  }

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
        {currentScreen}
      </main>
    </>
  );
}
