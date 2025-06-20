import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
