import React from "react";
import { Footer } from ".";

import { motion } from "framer-motion";


import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-[2px] border-black rounded-t-2xl overflow-hidden bg-white">
      <div className="flex-col flex md:flex-row items-center justify-between gap-6 lg:gap-10 px-8 py-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        className="flex items-center  justify-center  gap-4">
          <a 
          href="#" target="_blank" className="hover:scale-90 transition ease-in-out duration-300">
            <FaTelegramPlane className="text-5xl cursor-pointer bg-primary rounded-full p-2" />
          </a>
          <a href="https://twitter.com/primeapecoin?t=92h4YHPjwlujMw6ueT17Iw&s=09" target="_blank" className="hover:scale-90 transition ease-in-out duration-300">
            <FaTwitter className="text-5xl cursor-pointer bg-primary rounded-full p-2" />
          </a>
        </motion.div>
        <motion.div 
          initial={{ scale:0, opacity: 0 }}
          whileInView={{ scale:1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        className="border-8 border-secondary/70 rounded-full  bg-black/60">
          <div className="w-[250px]">
            <img src='/logo.png' alt="logo" className="object-cover w-full h-full" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        className="">
          <p className="text-lg lg:text-xl font-semibold text-center text-slate-800 tracking-wider">team@prmape.com</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
