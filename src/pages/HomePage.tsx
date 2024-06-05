import { motion } from "framer-motion";

import Title from "../components/title";
import Description from "../components/description";
import PageTransition from "../components/pageTransition";

const HomePage = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 flex flex-col lg:h-dvh md:h-full">
        <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center">
            <section>
              <Title
                color="text-white"
                title="Exploring the world of Tailwind CSS and animations with Framer Motion"
              />
              <Description
                color="text-gray-200"
                description="Hey there! Join me on this exciting React mini project where I'll be showing off my front-end skills. We're gonna dive into the world of Tailwind CSS for super-fast styling and Framer Motion for awesome animations."
              />
            </section>
            <motion.section
              className="flex justify-center"
              initial={{ y: "-20%" }}
              animate={{ y: 0 }}
              exit={{
                y: "-30%",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.img
                initial={{ y: "-5%" }}
                animate={{ y: 0 }}
                exit={{ x: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="max-w-[25rem]"
                src="https://i.ibb.co/sVqYmS2/Illustration.png"
                alt="Illustration"
              />
            </motion.section>
          </div>
        </div>
      </div>
      <PageTransition />
    </>
  );
};

export default HomePage;
