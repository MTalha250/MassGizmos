import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LuArrowUpRight } from "react-icons/lu";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

interface Props {
  variants: any;
  images: string[];
  title: string;
  description: string;
  price: number;
}

const Card = ({ images, title, description, price, variants }: Props) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col lg:flex-row gap-10 py-10 border-b border-[#66606B]"
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-full lg:w-1/2 h-64 md:h-96 rounded-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full relative">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-base md:text-lg my-4 md:my-6">{description}</p>
        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r text-transparent from-purple-500 to-white bg-clip-text">
          PKR {price}
        </p>
        <a
          href="https://wa.me/923452761076"
          className="rounded-xl block w-fit mt-6 md:mt-10 text-base md:text-lg lg:text-xl px-6 md:px-8 bg-transparent py-2 md:py-3 border border-white text-black dark:border-white relative group/button transition duration-200"
        >
          <div className="rounded-xl flex absolute bottom-0 right-0 bg-purple-800 h-full w-full group-hover/button:scale-x-90 group-hover/button:scale-y-75 transition-all duration-200" />
          <button className="relative w-full text-white">Order Now</button>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
