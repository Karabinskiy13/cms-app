/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/header.css';
import '../styles/book.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
