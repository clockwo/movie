import { Outlet } from 'react-router-dom';

import Navbar from '@/widgets/Navbar/Navbar.tsx';

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
