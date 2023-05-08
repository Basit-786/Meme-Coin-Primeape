import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-primary mx-auto border-t-[1px] border-black overflow-hidden">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-md md:text-xl text-outline logo uppercase text-center py-5"
      >
        PRMAPE © 2023. ALL RIGHTS RESERVED.
      </motion.h1>{" "}
    </div>
  );
};

export default Footer;
