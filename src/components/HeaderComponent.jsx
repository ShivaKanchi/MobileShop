import styles from "@/styles/component/ui-header.scss";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="ui-header">
      <Link href="/" passHref className="ui-header__logoWrapper">
        <span className="ui-header__firstName">Sri Manjunatha Mobiles</span>
        <p className="ui-header__lastName">Sales and Services</p>
      </Link>

      <div className="ui-header__navWrapper">
        <nav className="ui-header__navList">
          <Link href="products" passHref className="ui-header__navLink">
            Products
          </Link>
          <Link href="about" passHref className="ui-header__navLink">
            About
          </Link>
          <Link href="services" passHref className="ui-header__navLink">
            Services
          </Link>
          <Link href="contact" passHref className="ui-header__navLink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
