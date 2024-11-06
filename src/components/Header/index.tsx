import React from 'react';

import { Heading } from 'hyun-design-system';

import classNames from '@utils/classNames';

const Header = () => {
  const PREFIX = 'header';

  return (
    <header className={classNames(PREFIX, 'container')}>
      <Heading>Header</Heading>
    </header>
  );
};

export default Header;
