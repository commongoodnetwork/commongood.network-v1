import cx from "classnames";
import React from "react";
import Logo from "../logo";
import Head from "next/head";
import "./layout.scss";

const Layout = ({ className, children }) => {
  return (
    <div className={cx("layout", className)}>
      <Head>
        <title>Common Good Network</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="layout-header">
        <Logo className="layout-logo" />
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        &copy; 2014-{new Date().getFullYear()} Common Good Network. 150
        Paularino Ave, Bldg B, Costa Mesa, CA 92626.
      </footer>
    </div>
  );
};

export default Layout;
