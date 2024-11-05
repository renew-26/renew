import React from 'react';

import Link from 'next/link';

export default function Header() {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <Link href="/page1">Page 1</Link>
      <Link href="/page2">Page 2</Link>
    </header>
  );
}

Header.displayName = 'Header';
