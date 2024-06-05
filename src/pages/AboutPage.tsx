import React from "react";
import Title from "../components/title";
import Description from "../components/description";
import PageTransition from "../components/pageTransition";

const AboutPage = () => {
  return (
    <>
      <div className="bg-purple-600 bg-opacity-50 flex flex-col full">
        <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
          <Title color="" title="About Page" />
          <Description
          color=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          recusandae hic ad et, cumque asperiores quibusdam! Reiciendis odit
          quaerat maxime consequuntur quae tempore accusantium quam, rerum
          culpa, molestias natus amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          recusandae hic ad et, cumque asperiores quibusdam! Reiciendis odit
          quaerat maxime consequuntur quae tempore accusantium quam, rerum
          culpa, molestias natus amet."
          />
        </div>
      </div>
      <PageTransition />
    </>
  );
};

export default AboutPage;
