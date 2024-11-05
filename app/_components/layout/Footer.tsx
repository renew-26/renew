import React from 'react';

import { Heading } from 'hyun-design-system';

export default function Footer() {
  const PREFIX = 'footer';

  return (
    <footer className={PREFIX}>
      <Heading>Footer</Heading>
    </footer>
  );
}

Footer.displayName = 'Footer';
