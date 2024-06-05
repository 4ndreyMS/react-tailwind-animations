import { motion } from "framer-motion";
import React from "react";

interface description {
  description: string;
  color: string | "";
}

const Description: React.FC<description> = ({ description, color }) => {
  return (
    <div className="overflow-hidden max-w-[50rem]">
      <motion.p
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        className={`${color}`}
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Description;
