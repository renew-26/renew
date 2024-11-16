import React from 'react';

export default function Main({ children }: { children: React.ReactNode }) {
  const PREFIX = 'docs-wrap';

  return <div className={PREFIX}>{children}</div>;
}

Main.displayName = 'Main';
