import styles from "@/styles/component/header.module.css";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link href="/" passHref className={styles.logoWrapper}>
        <span>Mobile Shop</span>
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
