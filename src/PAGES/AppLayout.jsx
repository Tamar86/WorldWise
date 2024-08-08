import Sidebar from '../COMPONENTS/Sidebar';
import styles from './AppLayout.module.css';
import Map from '../COMPONENTS/Map';
import User from '../COMPONENTS/User';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
