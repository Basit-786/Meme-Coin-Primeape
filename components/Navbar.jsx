import React, { useState } from "react";
import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import Link from "next/link";

const links = [
  { name: "About Us", link: "#about" },
  { name: "Tokenomics", link: "#tokenomics" },
  { name: "Contact Us", link: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-white max-w-7xl h-20 md:mx-auto border-2 border-t-0 border-black rounded-t-none rounded-2xl overflow-x-hidden">
      <div className="flex items-center justify-between w-full h-full px-8">
        <motion.div
          className=""
          initial={{ x: -1000, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
        >
          <Link href={"/"}>
            <h1 className="text-primary t-shadow text-2xl md:text-3xl font-extrabold tracking-wider logo">
              $PRMAPE
            </h1>
          </Link>
        </motion.div>
        <motion.ul
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex items-center space-x-7"
        >
          {links.map((link) => (
            <li key={link.name} onClick={() => setActive(link.name)}>
              <a
                href={link.link}
                className={`hover:text-primary transition ease-in-out duration-300 text-lg logo ${
                  active === link.name ? "text-primary" : "text-black/90"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
        <div className="hidden lg:flex">
          <motion.button
            initial={{ x: 1000, y: -100, opacity: 0, scale: 1 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            whileHover={{
              scale: [0.7, 0.9],
            }}
            className="px-6 py-4 rounded-xl uppercase border-2 border-black-100 bg-primary text-white logo"
          >
            Buy $PRMAPE
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 1000, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="lg:hidden md:w-10 md:h-10 w-7 h-7 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <FaBars
            className={`w-full h-full ${
              toggle ? "hidden" : "flex"
            } text-primary`}
          />
        </motion.div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black/80 absolute top-0 right-0 z-10 bottom-0 w-[70%]`}
        >
          <motion.ul
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="list-none flex flex-col items-center gap-6 w-full mt-[25%] overflow-x-hidden"
          >
            {links.map((link) => (
              <li
                key={link.name}
                className={`cursor-pointer text-lg hover:text-primary ${
                  active === link.name ? "text-primary" : "text-white"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.name);
                }}
              >
                <a href={link.link} className="logo">
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
          <div
            className="w-12 h-12 cursor-pointer mx-4 -mt-2"
            onClick={() => setToggle(false)}
          >
            <AiOutlineClose className="w-full h-full text-white " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
