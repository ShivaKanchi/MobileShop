import React from "react";
import { createClient } from "../prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function HeaderComponent() {
  const client = createClient();
  let settings = { data: {} };

  try {
    settings = await client.getSingle("settings");
    // console.log("Settings:", settings.data.navlinks);
  } catch (error) {
    console.error("Error fetching settings:", error);
  }

  return (
    <header className="ui-header">
      {/* Logo and Subname */}
      <PrismicNextLink href="/" className="ui-header__logoWrapper">
        <span className="ui-header__firstName">
          {settings?.data?.name ?? "Default Name"}
        </span>
        <p className="ui-header__lastName">
          {settings?.data?.subname ?? "Default Subname"}
        </p>
      </PrismicNextLink>

      {/* Navigation Links */}
      <div className="ui-header__navWrapper">
        <nav className="ui-header__navList">
          <ul>
            {settings?.data?.navlinks?.map((link, index) => (
              <li key={`navlink-${index}`} className="ui-header__navListItem">
                <PrismicNextLink
                  field={link.link}
                  className="ui-header__navLink"
                >
                  {link.label}
                </PrismicNextLink>
              </li>
            )) ?? (
              <li className="ui-header__navLink">Home</li> // Fallback if no links exist
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
