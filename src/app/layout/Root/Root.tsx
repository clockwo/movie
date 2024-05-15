import Navbar from '@/widgets/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
