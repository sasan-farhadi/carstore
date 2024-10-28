import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Store</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/sasan-farhadi" target="_blank">
          Sasan Farhadi
        </a>{" "}
        Next.js  | Car Store Project &copy;
      </footer>
    </>
  );
}

export default Layout;
