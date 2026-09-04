import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { QuestionsProvider } from "../context/QuestionsProvider";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss"

const Layout = () => {
  return (
    <>
      <Header />
      <QuestionsProvider>
        <main className={styles.main}>
          <Outlet />
        </main>
      </QuestionsProvider>
      <Footer />
    </>
  );
};

export default Layout;
