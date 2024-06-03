"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";


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
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <p className="bg-primary text-white text-center py-4 rounded-lg text-sm 2xl:text-lg">{NAVBAR_CONTENT.TITLE}</p>
      <header className="grid grid-cols-[1fr,auto] mx-0 lg:mx-20 xl:mx-32 my-5 items-center relative">
        <nav className="grid grid-cols-[auto,1fr] gap-10 items-center">
          <div className="w-10 h-10 sm:w-11 sm:h-11 2xl:w-14 2xl:h-14">
            <Image src="/assets/images/logo.png" width={54} height={54} alt="logo" />
          </div>

          <ul className={`${openMenu ? "absolute top-[50px] right-0 rounded-lg bg-white w-40": "hidden"} lg:flex`}>
            {menuItems?.map((menuItem) => (
              <li className={`px-5 py-3 rounded-lg text-sm 2xl:text-lg  ${pathname==menuItem?.link ?" bg-[#f1f1f3] ":" hover:bg-[#f1f1f3]"}`}>
                <Link onClick={()=>setOpenMenu(false)} href={menuItem?.link}>{menuItem?.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center">
          <button className="rounded-lg px-5 py-3 lg:px-6 2xl:px-8 2xl:py-4 text-sm 2xl:text-lg">
            Sign Up
          </button>
          <button className="rounded-lg px-5 py-3 lg:px-6 2xl:px-8 2xl:py-4 text-sm 2xl:text-lg bg-primary text-white ">
            Login
          </button>
          <button onClick={()=>setOpenMenu(!openMenu)} className="lg:hidden !py-0 !pr-0 pl-5">
            <HiOutlineMenuAlt3 className="text-4xl"/>
          </button>
        </div>
      </header>

      <hr />
    </>
  );
};
export default Navbar;
