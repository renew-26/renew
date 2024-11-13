import React from 'react';

import classNames from '@utils/classNames';

interface AppBoxProps {
  children: React.ReactNode;
  bg?: 'gray' | 'blue' | 'green' | 'orange';
  outline?: boolean;
  className?: string | string[];
}

const AppBox: React.FC<AppBoxProps> = ({ children, bg = 'gray', outline = false, className }) => {
  const PREFIX = 'box';

  return (
    <div
      className={classNames(
        PREFIX,
        bg && `${PREFIX}--${bg}`,
        outline ? `${PREFIX}--outline` : '',
        Array.isArray(className) ? className.join(' ') : className,
      )}
    >
      {children}
    </div>
  );
};

export default AppBox;
