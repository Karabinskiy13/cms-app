/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';

import '../styles/globals.less';
import '../styles/header.less';
import '../styles/book.less';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
