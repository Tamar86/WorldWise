import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
