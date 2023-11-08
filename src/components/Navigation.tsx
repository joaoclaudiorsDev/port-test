import { Outlet } from 'react-router-dom';
import Header from './Header/Header';


const Navigation = () => {
  return (

    <>
      <Header />
      <Outlet />
    </>

  );
};

export default Navigation;