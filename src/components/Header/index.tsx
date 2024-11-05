import React from 'react';
import classNames from '../../utils/classNames';
import { Heading } from 'hyun-design-system';

const Header = () => {
  const PREFIX = 'header';

  return (
    <header className={classNames(PREFIX, 'container')}>
      <Heading>Header</Heading>
    </header>
  );
};

export default Header;
