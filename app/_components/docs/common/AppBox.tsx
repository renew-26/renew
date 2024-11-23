import React from 'react';

import classNames from '@utils/classNames';

interface AppBoxProps {
  children: React.ReactNode;
  bg?: 'blue' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string | string[];
}

const AppBox: React.FC<AppBoxProps> = ({ children, bg, size = 'lg', className }) => {
  const PREFIX = 'box';

  return (
    <div
      className={classNames(
        PREFIX,
        bg && `${PREFIX}--${bg}`,
        size && `${PREFIX}--${size}`,
        Array.isArray(className) ? className.join(' ') : className,
      )}
    >
      {children}
    </div>
  );
};

export default AppBox;
