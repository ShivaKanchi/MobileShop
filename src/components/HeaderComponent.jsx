import React from "react";
import { createClient } from "@prismicio/client";
import Link from "next/link";

export default function HeaderComponent() {
  const client = createClient();
  const settings = client.getSingle("settings");
  return (
    <header className="ui-header">
      <Link href="/" passHref className="ui-header__logoWrapper">
        <span className="ui-header__firstName">{settings?.data?.name}</span>
        <p className="ui-header__lastName">{settings?.data?.subname}</p>
      </Link>
      <div className="ui-header__navWrapper">
        <nav className="ui-header__navList">
          <ul>
            <Link href="/" passHref className="ui-header__navLink"></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
