"use client";
import { Hero } from "@/components/home/hero";
import Content from "@/components/home/hero/content";
import Link from "next/link";
import React from "react";
import img1 from "@/assets/home1.webp";
import img2 from "@/assets/home2.webp";
import img3 from "@/assets/home3.webp";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Products from "@/components/home/products";
const words = [
  {
    text: "Sustainable",
    className: "text-purple-500 text-5xl xl:text-6xl font-bask",
  },
  { text: "Choices,", className: "text-white text-5xl xl:text-6xl font-bask" },
  {
    text: "Innovative",
    className: "text-purple-500 text-5xl xl:text-6xl font-bask",
  },
  { text: "Living", className: "text-white text-5xl xl:text-6xl font-bask" },
];

const page = () => {
  return (
    <div className="bg-primary">
      <div className="h-dvh relative" id="#home">
        <Hero
          images={[img1.src, img2.src, img3.src]}
          children={
            <div className="text-white z-20 flex flex-col md:items-center px-8">
              <h1 className="mb-5 font-bold text-5xl sm:text-6xl md:text-center md:hidden font-bask">
                <span className="text-purple-500">Sustainable</span> Choices,{" "}
                <span className="text-purple-500">Innovative</span> Living
              </h1>
              <Content
                words={words}
                className="hidden md:flex"
                cursorClassName="bg-white hidden md:block"
              />
              <p className="md:text-center font-semibold sm:text-lg md:text-2xl xl:w-2/3">
                Welcome to MASS GIZMOS, where sustainable choices meet
                innovative living. Explore our range of eco-friendly gadgets
                designed to enhance your lifestyle. Join us in making
                responsible and innovative decisions for a greener future.
              </p>
              <Link
                href="/products"
                className="rounded-xl mt-10 sm:text-lg md:text-xl px-8 py-3 border border-white bg-transparent text-black  dark:border-white relative group transition duration-200"
              >
                <div className="rounded-xl flex absolute bottom-0 right-0 bg-purple-800  h-full w-full -z-10 group-hover:scale-x-90 group-hover:scale-y-75 transition-all duration-200" />
                <button className="relative w-full text-white">
                  Explore Our Products
                </button>
              </Link>
            </div>
          }
          className="h-screen w-full"
        />
      </div>
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default page;
