import '../styles/globals.scss';
import { AppProps } from 'next/app';
import BgContainer from '../components/layout/BgContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BgContainer animate={true}>
      <Component {...pageProps} />
    </BgContainer>
  );
}

export default MyApp;
