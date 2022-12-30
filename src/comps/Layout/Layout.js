import { useRouter } from 'next/router';
import styles from './Layout.module.scss';

import Nav from 'comps/Nav';
// import Main from 'components/Main';
// import Footer from 'components/Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className={styles.layoutContainer}>

      <Nav />

      {/* <Main>{children}</Main> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
