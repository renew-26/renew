import React from 'react';

export default function Main({ children }: { children: React.ReactNode }) {
  const PREFIX = 'wrapper';

  return <div className={PREFIX}>{children}</div>;
}

Main.displayName = 'Main';
