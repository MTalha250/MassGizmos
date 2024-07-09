import React from "react";
import MarqueeComp from "react-fast-marquee";

const MyMarquee = () => {
  return (
    <div className="fixed bottom-0 w-full z-20 bg-primary border-y-2 border-white h-14 flex items-center text-white">
      <MarqueeComp
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="w-full"
      >
        <p className="tracking-wider text-sm sm:text-base">
          We collaborate with trusted suppliers to bring you high-quality
          products. While we don’t hold all items in stock, we ensure that they
          are sourced and delivered promptly to meet your needs.
        </p>
      </MarqueeComp>
    </div>
  );
};

export default MyMarquee;
