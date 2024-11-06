import React from 'react';
import classNames from '@utils/classNames';

const LayoutMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const PREFIX = 'main';

  return <div className={classNames(PREFIX)}>{children}</div>;
};

export default LayoutMain;
