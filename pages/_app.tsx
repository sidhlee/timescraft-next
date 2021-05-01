import '../styles/globals.scss';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps;
  return (
    <Component {...rest}>
      <main className="app">{children}</main>
    </Component>
  );
}

export default MyApp;
