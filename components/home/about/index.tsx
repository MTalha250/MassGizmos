"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const About = () => {
  return (
    <motion.div
      className="pt-32 pb-10 lg:px-32 sm:px-16 px-8 bg-primary text-secondary"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="about"
    >
      <div className="flex gap-10 flex-col md:flex-row items-center justify-around text-secondary">
        <motion.div className="w-full lg:w-auto" variants={variants}>
          <h1 className="text-4xl font-light font-bask">Who We Are</h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span
              style={{
                background: "url('/line.png') left bottom no-repeat",
              }}
            >
              Behind the Scenes
            </span>
          </h1>
        </motion.div>
        <motion.p
          variants={variants}
          className="w-full lg:w-3/5 text-justify tracking-wider"
        >
          Welcome to MASS GIZMOS! We are dedicated to providing the best
          eco-friendly gadgets that combine innovation with sustainability. Our
          mission is to help you make greener choices with products that reduce
          environmental impact without sacrificing quality or functionality.
          Join us in embracing a sustainable future, one gadget at a time.
          <motion.span variants={variants}>
            <Link
              href="#contact"
              className="mt-5 group w-fit hover:bg-purple-600 hover:text-white py-1 px-5 rounded-full transition duration-300 items-center space-x-3 font-bold font-bask bg-secondary text-primary flex"
            >
              <span>Contact</span>
              <span className="w-[25px] overflow-hidden">
                <span className="transition-transform duration-500 flex w-full -translate-x-full group-hover:translate-x-0">
                  <PiArrowRightThin className="text-2xl shrink-0" />
                  <PiArrowRightThin className="text-2xl shrink-0" />
                </span>
              </span>
            </Link>
          </motion.span>
        </motion.p>
      </div>
      <motion.div
        variants={variants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-secondary mt-10"
      >
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center text-transparent bg-gradient-to-r from-purple-500 to-white bg-clip-text">
            Our Mission
          </h1>
          <p>
            Our mission is to promote a sustainable future by offering
            innovative, eco-friendly gadgets. We aim to reduce environmental
            impact and inspire eco-conscious living through high-quality,
            energy-efficient products. Join us in making a positive difference
            for our planet, one gadget at a time.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider border-y-2 md:border-y-0 md:border-x-2 px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center text-transparent bg-gradient-to-r from-purple-500 to-white bg-clip-text">
            Our Vision
          </h1>
          <p>
            We envision a world where technology and sustainability go hand in
            hand. We strive to lead the way in providing eco-friendly gadgets
            that empower individuals to live greener, more responsible lives.
            Our goal is to create a lasting positive impact on the environment
            through innovative, sustainable solutions.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full text-justify tracking-wider px-0 py-10 sm:p-10 space-y-5"
        >
          <h1 className="text-4xl font-light font-bask text-center text-transparent bg-gradient-to-r from-purple-500 to-white bg-clip-text">
            Our Commitment
          </h1>
          <p>
            We are committed to delivering cutting-edge, eco-friendly gadgets
            that meet the highest standards of sustainability and innovation. We
            pledge to continuously seek out and offer products that help reduce
            environmental impact, support responsible living, and contribute to
            a greener future.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
