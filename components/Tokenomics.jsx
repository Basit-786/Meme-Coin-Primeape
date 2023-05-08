import React from "react";

import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col md:flex-row items-center justify-between flex-wrap gap-6 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-[320px]">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=" bg-white border-2 border-black  flex flex-col items-center justify-center px-3 py-4 rounded-3xl w-full"
        >
          {" "}
          <h1 className="text-3xl md:text-5xl text-outline-color logo uppercase text-center pb-5">
            800 B
          </h1>
          <h3 className="text-xl md:text-3xl text-outline-color logo uppercase text-center pb-5">
            Supply
          </h3>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" bg-white border-2 border-black  flex flex-col items-center justify-center px-3 py-4 rounded-3xl w-full"
        >
          {" "}
          <h1 className="text-3xl md:text-5xl text-outline-color logo uppercase text-center pb-5">
            9%
          </h1>
          <h3 className="text-xl md:text-3xl text-outline-color logo uppercase text-center pb-5">
            Tax
          </h3>
        </motion.div>{" "}
      </div>
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-full lg:w-auto"
      >
        <img
          src="/contract.png"
          alt=""
          className="w-[250px] md:w-[330px]  h-[250px] md:h-[330px]  object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=" bg-white border-2 border-black py-16 lg:py-20 flex flex-col items-center justify-center px-3 rounded-3xl w-full xl:max-w-[550px] xl:w-auto mx-auto"
      >
        <h1 className="text-3xl md:text-5xl text-outline logo uppercase text-center pb-5 ">
          Contract
        </h1>
        <p className="text-md md:text-xl text-wrap text-center font-semibold text-slate-800 ">0x130fFCDc5bc7f269f75BaebE5236fC9F0CcB62a7</p>
        <p className="text-sm md:text-lg text-wrap text-center text-slate-700 ">$PRMAPE is a meme coin with no intrinsic value or expectation of financial return. There is no format team or roadmap. The coin is completely useless and for entertainment purposes only.</p>
      </motion.div>
    </div>
  );
};

export default Tokenomics;
