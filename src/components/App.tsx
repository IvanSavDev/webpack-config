import { Link, Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <p>App</p>
      <div>{`Platform: ${__PLATFORM__}`}</div>
      <Link to="/about">about</Link>
      <Link to="/shop">shop</Link>
      <Outlet />
    </div>
  );
};
