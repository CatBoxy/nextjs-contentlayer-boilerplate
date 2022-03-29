import { Nav } from './Nav';
import styles from './Layout.module.css';

export const Layout = ({ children }) => (
  <>
    <div className={styles.container}>
      <Nav />
      {children}
    </div>
  </>
);