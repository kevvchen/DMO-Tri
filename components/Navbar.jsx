"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@components/MobileMenu";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

  const toggleMenu = () => {
    setToggleDropDownMenu((prevToggleState) => !prevToggleState);
  };

  return (
    <nav className="w-full sticky top-0 z-40 min-h-nav-small bg-darkBlue lg:min-h-nav-medium ">
      {/* Inner flex container */}
      <div className="px-4 py-4 flex items-center justify-between md:px-16 lg:justify-start">
        {/* Flex item 1 */}
        <Link href="/">
          {/* <Image src="/assets/images/site-logo.svg" width={160} height={30} /> */}
          <h1 className="navbar-link-styling">Digimon Masters Tri</h1>
        </Link>
        {/* Flex items 2 */}
        <div className="flex-row ml-9 gap-7 hidden lg:flex">
          {/* Navbar items */}
          <Link href="/tier-list" className="navbar-link-styling">
            <span>Tier List</span>
          </Link>
          <Link href="/guides" className="navbar-link-styling">
            <span>Guides</span>
          </Link>
          <Link href="/encyclopedia" className="navbar-link-styling">
            <span>Encyclopedia</span>
          </Link>
          <Link href="/seal-master" className="navbar-link-styling">
            <span>Seal Master</span>
          </Link>
          <Link href="/game-leaks" className="navbar-link-styling">
            <span>Game Leaks</span>
          </Link>
        </div>
        {/* (Mobile nav) */}
        <div className="flex items-center gap-2 ml-8 relative lg:hidden">
          <button onClick={toggleMenu}>
            <Bars3Icon className="h-9 text-white transition" />
            {/* The mobile dropdown option goes here */}
            <MobileMenu dropDown={toggleDropDownMenu} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
