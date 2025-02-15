"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center fixed py-2 px-5 w-[90%] backdrop-blur bg-black/50 top-5 left-1/2 -translate-x-1/2 rounded-xl z-50">
      <Link href="/">
        <img src={logo.src} alt="logo" className="w-24 sm:w-28" />
      </Link>
      <ul className="hidden md:flex text-white gap-6 font-light">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="leading-relaxed overflow-hidden block h-[3.2vh] group"
            >
              <div className="group-hover:text-purple-400 flex flex-col h-full group-hover:-translate-y-full transition duration-500 ease-in-out">
                <span>{link.label}</span>
                <span>{link.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center space-x-3">
        <a
          href="https://www.facebook.com/profile.php?id=61561635901044"
          target="_blank"
        >
          <FaFacebookF className="text-black bg-white rounded-full p-2 text-4xl cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/massgizmos_pakistan?igsh=OG9vaWU2Zjh6Nm95&utm_source=qr"
          target="_blank"
        >
          <FaInstagram className="text-black bg-white rounded-full p-2 text-4xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
