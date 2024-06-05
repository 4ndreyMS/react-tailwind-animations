import { Link } from "react-router-dom";
import reactSvg from "../../assets/react.svg";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <span>
          <motion.img
            animate={{ rotate: 360, scale: ["100%", "130%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            src={reactSvg}
            alt="My Icon"
          />
        </span>
        <ul className="flex gap-4 justify-end p-4">
          <li className="font-medium">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="font-medium">
            <Link to="/about">About</Link>
          </li> */}
          <li className="font-medium">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
