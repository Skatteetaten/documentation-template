import React from "react";
import { Link } from "gatsby";
import classnames from "classnames/bind";
import Logo from "@skatteetaten/frontend-components/TopBanner/assets/logoSKEen.svg";
import Image from "@skatteetaten/frontend-components/Image";
import Icon from "@skatteetaten/frontend-components/Icon";

import * as styles from "./header.module.css";

const cx = classnames.bind(styles);

const isActive =
  (href: string) =>
  ({ isCurrent, isPartiallyCurrent }: any): any => {
    const activeStyle = {
      className: styles.mainHeaderMenuActive,
    };

    if (href === "/" && isCurrent) {
      return activeStyle;
    }

    return href !== "/" && isPartiallyCurrent ? activeStyle : null;
  };

const HeaderMenu = ({ menu = [], showMobileMenu }: any) => (
  <nav
    className={cx({
      mainHeaderNav: true,
      mainHeaderNavHidden: !showMobileMenu,
    })}
  >
    <ul className={styles.mainHeaderMenu}>
      {menu.map((item: any, index: number) => (
        <li key={`${item.href}-${index}`}>
          <Link
            to={item.href}
            getProps={isActive(item.href)}
            activeClassName={styles.mainHeaderMenuActive}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Header = ({ title, menu, onToggleMenu, showMobileMenu, ...rest }: any) => (
  <div>
    <div {...rest} className={styles.mainHeader}>
      <div className={styles.mainHeaderContent}>
        <div className={styles.mainHeaderWrapper}>
          <div>
            <Image src={Logo} className={styles.mainHeaderLogo} />
          </div>
          <div className={styles.mainHeaderButton}>
            <button onClick={onToggleMenu}>
              <Icon iconName="Menu" />
            </button>
          </div>
        </div>
        {menu && <HeaderMenu menu={menu} showMobileMenu={showMobileMenu} />}
      </div>
    </div>
  </div>
);

export default Header;
