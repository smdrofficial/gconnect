import React, { useState } from "react";

// components
import Link from "next/link";

import Image from "next/image";

import headerMenu from "@data/header-menu.json";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(null);

  return (
    <header className="header-wrapper">
      <div className="header-section">
        <div className="header-contents">
          <Link href="/">
            <a className="header-logo-section d-block position-relative">
              <Image src="/images/hfn-dms-logo.svg" alt="logo" width={"300"} height={"81"} quality={100} layout="responsive" />
              {/* <Image src="/images/hfn-dms-logo.svg" alt="logo" objectFit="contain" quality={100} layout="fill" /> */}
            </a>
          </Link>
          <div className="menubar-toggle-button">
            <span
              className="menubar-toggle-icon"
              role="menubar"
              tabIndex="0"
              onClick={() => setShowMenu(!showMenu)}
              onKeyDown={() => setShowMenu(!showMenu)}
            />
          </div>
          <div
            className={`header-menu-scroll-section${showMenu ? " show-header-menu-scroll" : ""
              }`}
          >
            <nav
              className={`header-menu-section${showMenu ? " show-header-menu" : ""
                }`}
            >
              {headerMenu.map((menu, index) => {
                return menu.subMenu ? (
                  <div
                    key={menu.name}
                    className={`header-menu-item${menu.name === showSubMenu ? " header-menu-active" : ""
                      }`}
                    role="menubar"
                    tabIndex="-1"
                    onMouseLeave={() => setShowSubMenu(null)}
                  >
                    <div
                      className="header-menu-text"
                      role="menuitem"
                      onFocus={() => { }}
                      tabIndex="-1"
                      onMouseOver={() => setShowSubMenu(menu.name)}
                    >
                      {menu.name}
                    </div>
                    <div className="header-sub-menu">
                      {menu.subMenu.map((subMenu) => (
                        <Link
                          key={subMenu.name}
                          href={subMenu.path}
                        >
                          <a className="header-sub-menu-item" tabIndex={menu.name === showSubMenu ? index : "-1"} onClick={() => {
                            setShowMenu(false);
                            setShowSubMenu(null);
                          }}>
                            {subMenu.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={menu.name} className="header-menu-item">
                    <Link href={menu.path}>
                      <a className="header-menu-text" onClick={() => {
                        setShowMenu(false);
                        setShowSubMenu(null);
                      }}>
                        {menu.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
