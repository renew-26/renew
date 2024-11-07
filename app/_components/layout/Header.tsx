import React from 'react';

import { Heading } from 'hyun-design-system';
import Link from 'next/link';

export default function Header() {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <Link href="/page1">Page 1</Link>
      <Heading className={'pl-6 pr-6'}>Header</Heading>
      <Link href="/page2">Page 2</Link>
    </header>
  );
}

Header.displayName = 'Header';
