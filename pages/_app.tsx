import '../styles/globals.scss';
import { AppProps } from 'next/app';
import BgContainer from '../components/layout/BgContainer';
import { Provider } from 'react-redux';
import store from '../app/store';

// https://redux-toolkit.js.org/tutorials/quick-start#provide-the-redux-store-to-react
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BgContainer animate={true}>
        <Component {...pageProps} />
      </BgContainer>
    </Provider>
  );
}

export default MyApp;
