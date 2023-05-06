import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import logo from "../public/logo.png";


const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen max-w-7xl mx-auto">
      <motion.div 
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}
      className="border-8 border-secondary/70 rounded-full  bg-black/70">
        <div 
        
        className="w-80 md:w-96 ">
          <Image src={logo} alt="logo" className="object-cover w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;