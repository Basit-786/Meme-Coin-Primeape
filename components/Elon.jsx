import React from "react";

import { motion } from "framer-motion";

const Elon = () => {
  return (
    <div className="bg-primary max-w-7xl mx-auto rounded-2xl py-8 px-6 flex  flex-wrap items-center justify-between mt-20 mb-48 lg:mb-10 pb-60 sm:pb-80 lg:pb-20">
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="py-6 md:px-6 w-full lg:w-[60%]"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-outline uppercase pb-2 md:pb-5 logo text-wrap ">
          $PRMAPE: Empowering the Community for Growth
        </h1>
        <p className="text-slate-900 text-lg md:text-xl leading-10">
          $PRMAPE is not your average meme. It possesses the power to stay with
          the community. $PRMAPE plans to use the liquidity it raises because
          let’s be honest, when you get rugged so many times in crypto, there
          isn’t much of your own to invest. This Ape has to let the world know
          it evolves during rough times so it will need 9% of your taxes to get
          the efforts going.
        </p>
      </motion.div>
      <div className="flex flex-col justify-center items-center w-full lg:w-[40%] relative">
        <motion.img
          initial={{ x: 100, y: -100, opacity: 0 }}
          whileInView={{ x: 10, y: 0, opacity: 1, rotate: 10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src="/elon2.jpg"
          className="rounded-2xl w-[400px] absolute top-5 left-0 lg:top-5"
          alt=""
        />
        <motion.img
          initial={{ x: 100, y: 100, opacity: 0 }}
          whileInView={{ x: 4, y: 0, opacity: 1, rotate: -12 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src="/elon.png"
          className="rounded-2xl w-[500px] absolute top-8 right-0 lg:-top-80 "
          alt=""
        />
      </div>
    </div>
  );
};

export default Elon;
