"use client"
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiOutlineMenuAlt3 } from "react-icons/hi";


const NAVBAR_CONTENT = {
  TITLE: "Free Courses 🌟 Sale Ends Soon, Get It Now",
};

const menuItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Courses",
    link: "/courses",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <p className={styles.headTitle}>{NAVBAR_CONTENT.TITLE}</p>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/assets/images/logo.png" width={54} height={54} alt="logo" />
          </div>

          <ul className={styles.menu}>
            {menuItems?.map((menuItem) => (
              <li>
                <Link href={menuItem?.link} className={pathname==menuItem?.link && styles.activeLink}>{menuItem?.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.btns}>
          <button className={styles.btnSignup}>Sign Up</button>
          <button className={styles.btnLogin}>Login</button>
          <button className={styles.btnMenu}><HiOutlineMenuAlt3 className={styles.iconMenu}/></button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
