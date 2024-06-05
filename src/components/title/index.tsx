import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  color: string | "";
}

const Title: React.FC<Props> = ({ title, color }) => {
  return (
    <div className="overflow-hidden pb-4 pt-4">
      <motion.h1
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6, delay: 0 }}
        className={`text-3xl font-bold ${color} text-5xl`}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Title;
