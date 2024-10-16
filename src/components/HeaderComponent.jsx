import styles from "@/styles/component/header.module.scss";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref className={styles.logoWrapper}>
        <span className={styles.firstName}>Sri Manjunatha Mobiles</span>
        <p className={styles.lastName}>Sales and Services</p>
      </Link>

      <div className={styles.navWrapper}>
        <nav className={styles.navList}>
          <Link href="products" passHref className={styles.navLink}>
            Products
          </Link>
          <Link href="about" passHref className={styles.navLink}>
            About
          </Link>
          <Link href="services" passHref className={styles.navLink}>
            Services
          </Link>
          <Link href="contact" passHref className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
