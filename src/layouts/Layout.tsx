import { Outlet } from 'react-router-dom';

import LayoutHeader from '@components/layout/Header';
import LayoutMain from '@components/layout/Main';

const Layout = () => {
  return (
    <div>
      <LayoutHeader />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </div>
  );
};

export default Layout;
