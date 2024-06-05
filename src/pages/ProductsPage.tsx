import React from "react";
import Title from "../components/title";
import Description from "../components/description";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import PageTransition from "../components/pageTransition";

const ProductsPage = () => {
  const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: "100%",
      transition: {
        ease: "easeInOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const products = [
    {
      name: "Apple iPhone 14 Pro",
      description:
        "The latest iPhone with a powerful A16 Bionic chip and a stunning Super Retina XDR display.",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-silver-select-202209?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1660793591000",
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      description:
        "A top-of-the-line Android smartphone with a powerful Snapdragon 8 Gen 2 processor and a versatile quad-lens camera system.",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Samsung_Galaxy_S23_Ultra_5G_Front.jpg",
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      description:
        "Wireless noise-canceling headphones with exceptional sound quality and industry-leading noise cancellation.",
      img: "https://m.media-amazon.com/images/I/61LU3R3g6DL._AC_SL1500_.jpg",
    },
    {
      name: "Google Pixel 7 Pro",
      description:
        "A flagship Android smartphone with a powerful Tensor G2 chip and an advanced triple-lens camera system.",
      img: "https://store.google.com/product/pixel_7_pro?hl=en-US",
    },
    {
      name: "Bose QuietComfort 45 Headphones",
      description:
        "Wireless noise-canceling headphones with exceptional sound quality and comfortable design.",
      img: "https://m.media-amazon.com/images/I/61o0dORlRDL._AC_SL1500_.jpg",
    },
    {
      name: "Apple AirPods Pro (2nd Generation)",
      description:
        "True wireless earbuds with active noise cancellation, spatial audio, and a comfortable fit.",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME732?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1669548544000",
    },
    {
      name: "Samsung Galaxy Watch 5 Pro",
      description:
        "A rugged smartwatch with a durable titanium case, advanced health tracking features, and long battery life.",
      img: "https://www.samsung.com/global/galaxy/galaxy-watch5-pro/buy/",
    },
    {
      name: "Dyson V15 Detect Absolute",
      description:
        "A powerful and versatile cordless vacuum cleaner with advanced laser detection and a self-cleaning brush bar.",
      img: "https://m.media-amazon.com/images/I/61o0dORlRDL._AC_SL1500_.jpg",
    },
  ];
  return (
    <>
      <div className="bg-opacity-50 flex flex-col bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 py-4">
        <div className="container mx-auto px-4 ">
          <Title color="text-white" title="Products Page" />

          {/* <Description
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          recusandae hic ad et, cumque asperiores quibusdam! Reiciendis odit
          quaerat maxime consequuntur quae tempore accusantium quam, rerum
          culpa, molestias natus amet."
        /> */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{
              y: "50%",
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="gap-4 grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-start justify-center"
          >
            {products.map((item, i) => (
              <motion.div
                key={i}
                variants={itemAnim}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  isBlurred
                  shadow="lg"
                  className="py-4 max-w-[20rem] items-center"
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start lg:min-h-[8rem]">
                    <h4 className="font-bold text-large">{item.name}</h4>
                    <p>{item.description.slice(0, 60)}</p>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2 flex flex-col items-center">
                    <img
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="https://nextui.org/images/hero-card-complete.jpeg"
                    />
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <PageTransition />
    </>
  );
};

export default ProductsPage;
