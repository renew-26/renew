import React from 'react';

import type { Metadata } from 'next';

import 'hyun-design-system/dist/style.css';
import '@styles/style.scss';
import LayoutFooter from '@layout/Footer';
import LayoutHeader from '@layout/Header';
import LayoutMain from '@layout/Main';

export const metadata: Metadata = {
  title: 'test',
  description: 'test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body id="root">
        <div className="wrap">
          <LayoutHeader />
          <LayoutMain>{children}</LayoutMain>
          <LayoutFooter></LayoutFooter>
        </div>
      </body>
    </html>
  );
}
