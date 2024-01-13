import { Suspense, ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Jinsoul Blog',
  description: 'Generated by Jinsoul',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="mx-auto max-w-3xl px-6 min-h-screen flex flex-col">
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="grow">{children}</main>
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
