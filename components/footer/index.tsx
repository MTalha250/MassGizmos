import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import { navLinks } from "@/constants";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-14">
      <div className="py-10 px-8 md:px-16">
        <div className="flex flex-wrap justify-between gap-10">
          <img
            src={logo.src}
            alt=""
            className="w-[200px] h-auto  self-center"
          />
          <div className="max-w-[450px]">
            <h3 className="text-xl font-bold mb-2 tracking-wider uppercase">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 px-2 text-primary">
                {" "}
                Sign Up!
              </span>
            </h3>
            <p className="font-light md:block hidden text-xs mt-2">
              Sign up to our newsletter and be the first to know about the
              latest news, special offers, events, and discounts.
            </p>
            <form className="flex mt-4 flex-col sm:flex-row sm:items-end">
              <button
                type="submit"
                className="py-2 px-6 border whitespace-nowrap border-transparent text-sm font-medium text-black bg-white"
              >
                Sign up for our E-Newsletter
              </button>
            </form>
            <div className="flex space-x-3 mt-6 w-1/2">
              <a
                href="https://www.facebook.com/profile.php?id=61561012355841&mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebookF className="text-black bg-white rounded-full p-2 text-4xl cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/arfa.maryams?igsh=MXA3cXVxb25ud3V0eg=="
                target="_blank"
              >
                <FaInstagram className="text-black bg-white rounded-full p-2 text-4xl cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="max-w-[280px]">
            <h3 className="text-xl font-bold tracking-wider uppercase">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 px-2 text-primary">
                Contact
              </span>{" "}
              Us
            </h3>
            <ul className="mt-4 text-sm space-y-2">
              <li>
                <FaPhone className="rotate-90  inline mr-2 text-purple-500" />{" "}
                +92 328 3280007
              </li>
              <li>
                <FaEnvelope className="inline  mr-2 text-purple-500" />
                <a href="mailto:arfanmaryams@gmail.com">
                  {" "}
                  massgizmos@gmail.com
                </a>
              </li>
              <li>
                <FaWhatsapp className="inline text-lg mr-2 text-purple-500" />
                <a href="https://wa.me/923452761076"> +92 345 2761076</a>
              </li>
              <li className="flex mt-2">
                <FaMapMarkerAlt className="inline mr-2  text-lg text-purple-500" />
                <a href="">Address: Lahore, Pakistan</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-wider uppercase">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 px-2 text-primary">
                Quick
              </span>{" "}
              Links
            </h3>
            <ul className="mt-4 text-sm space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="border-y-2 bg-primary text-white text-center py-2">
          <p className="text-sm">© 2024 Mass Gizmos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
