/* eslint-disable @next/next/no-img-element */
import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between md:px-4 min-h-screen flex-wrap-reverse my-10 md:my-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: .65 }}
        className="flex justify-center items-center w-full md:w-[80%] lg:w-[44%]"
      >
        <img src="/hero.png" alt="LOGO" className="w-full h-full" />
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: .65 }}
        className="py-8 md:px-6  w-full lg:w-[52%]"
      >
        <h1 className="text-3xl md:text-5xl text-outline uppercase text-center pb-5 logo">
          What is PRMAPE
        </h1>
        <p className="text-lg md:text-xl leading-10 text-center text-slate-800">
        Tired and frustrated getting rugged every moment in Crypto? Well, feel yourself home as this Ape uses its anger to fuel its energy. Elon, Biden, Bezos... you name it, every one loves PrimeApe. When nervous, can’t sleep at night, had a fight with wifey, close your eyes, take a deep breath and think of this Ape. Apes come and go, PrimeApe stays forever by your side!!!!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
