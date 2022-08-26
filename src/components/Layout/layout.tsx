import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import favicon from "../../../favicon.png";

import "prismjs/themes/prism.css";
import "./layout.css";

const Layout: FC = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((current) => !current);
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menu {
                href
                name
              }
            }
          }
        }
      `}
      render={({ site }) => (
        <>
          <Helmet
            title={site.siteMetadata.title}
            link={[
              {
                href: favicon,
                rel: "shortcut icon",
              },
            ]}
          />
          <Header
            menu={site.siteMetadata.menu}
            title={site.siteMetadata.title}
            style={{ marginBottom: "35px" }}
            onToggleMenu={toggleMobileMenu}
            showMobileMenu={showMobileMenu}
          />
          <div
            style={{
              display: "flex",
              padding: "30px",
              maxWidth: "1024px",
              margin: "0 auto",
            }}
          >
            {children}
          </div>
          <Footer />
        </>
      )}
    />
  );
};

export default Layout;
