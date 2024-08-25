import styles from "@/styles/component/header.module.css";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoWrapper}>
        <span>Mobile Shop</span>
      </Link>

      <div className={styles.navWrapper}>
        <nav className={styles.navList}>
          <Link href="products" className={styles.navLink}>
            Products
          </Link>
          <Link href="about" className={styles.navLink}>
            About
          </Link>
          <Link href="services" className={styles.navLink}>
            Services
          </Link>
          <Link href="contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
