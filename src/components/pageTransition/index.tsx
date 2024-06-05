import { motion } from "framer-motion";
import React from "react";

const PageTransition = () => {
  return (
    <>
      <motion.div
        className="bg-gray-950 fixed top-0 left-0 w-[100%] h-[100vh] z-50 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-gray-950 fixed top-0 left-0  w-[100%] h-[100vh] z-50 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default PageTransition;
