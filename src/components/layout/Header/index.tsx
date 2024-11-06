import { Heading } from 'hyun-design-system';

import classNames from '@utils/classNames';

const LayoutHeader = () => {
  const PREFIX = 'header';

  return (
    <header className={classNames(PREFIX)}>
      <Heading>LayoutHeader</Heading>
    </header>
  );
};

export default LayoutHeader;
