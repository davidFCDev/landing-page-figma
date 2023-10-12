import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full flex items-center justify-between px-4 lg:px-20 py-3 sm:py-5 font-semibold font-rubik text-lg">
      <img src="/logo.png" alt="logo" className="w-28" />

      <ul className="hidden sm:flex gap-3 sm:gap-5 lg:gap-6">
        <Link href="#" className="hover:text-orange text-xs sm:text-lg">
          Home
        </Link>
        <Link href="#services" className="hover:text-orange text-xs sm:text-lg">
          Services
        </Link>
        <Link href="#about" className="hover:text-orange text-xs sm:text-lg">
          About
        </Link>
        <Link href="#" className="hover:text-orange text-xs sm:text-lg">
          Resources
        </Link>
        <Link href="#" className="hover:text-orange text-xs sm:text-lg">
          Blog
        </Link>
      </ul>

      <aside className="sm:hidden">
        <div id="menuToggle">
          <input id="checkbox" type="checkbox" onClick={handleToggle} />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-dimWhite shadow-sm shadow-gray3 absolute top-14 right-0 mx-4 my-1 min-w-[100px] rounded-lg sidebar font-rubik"
            >
              <ul className="list-none flex gap-2 justify-end items-start flex-1 flex-col tracking-wider">
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Home
                </Link>
                <Link
                  href="#services"
                  className="hover:text-orange text-xs sm:text-lg"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="hover:text-orange text-xs sm:text-lg"
                >
                  About
                </Link>
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Resources
                </Link>
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Blog
                </Link>
                <button className="text-xs sm:text-lg text-orange active:text-black">
                  Sign Up
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      <button className="hidden sm:inline-flex text-xs sm:text-lg justify-center items-center bg-orange text-white px-2 sm:px-4 py-2 lg:py-4 rounded-xl sm:rounded-2xl hover:bg-orange2">
        Sign Up
      </button>
    </div>
  );
};

export default Nav;
