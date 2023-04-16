import MainLayout from '@/layouts/MainLayout';
import '@/styles/global/styles.scss';
import type { AppProps } from 'next/app';
import { Outfit, Vollkorn } from 'next/font/google';
const serif = Vollkorn({ subsets: ['latin'], variable: '--serif' });
const sanserif = Outfit({ subsets: ['latin'], variable: '--san-serif' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --serif-font: ${serif.style.fontFamily};
          --sanserif-font: ${sanserif.style.fontFamily};
        }
      `}</style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
