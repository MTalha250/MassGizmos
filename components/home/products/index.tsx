import React from "react";
import Card from "./card";
import img1 from "@/assets/s1.jpg";
import img2 from "@/assets/s2.jpg";
import img3 from "@/assets/s3.jpg";
import { products } from "@/constants";
import { motion } from "framer-motion";
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
const Products = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="bg-black px-8 md:px-16 lg:px-32 pt-32 pb-10 text-white"
      id="products"
    >
      <motion.h1
        variants={variants}
        className="text-5xl bg-gradient-to-r text-transparent from-purple-500 to-white bg-clip-text"
      >
        Our Products
      </motion.h1>
      <motion.p variants={variants} className="text-2xl w-full max-w-3xl my-5">
        Explore eco-friendly gadgets, from solar chargers to energy-efficient
        smart home devices. Sustainable tech for a greener future.
      </motion.p>
      {products.map((product, index) => (
        <Card
          variants={variants}
          key={index}
          images={product.images}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </motion.div>
  );
};

export default Products;
