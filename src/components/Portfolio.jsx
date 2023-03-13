import React, { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="flex sm:h-screen justify-center items-center" id="works">
      <div>
        <h1 className="text-center dark:text-stone-900 text-3xl md:text-5xl mb-1 md:mb-3 font-bold p-20">
          Latest Works
        </h1>
        <div className="flex-col md:flex-row items-center justify-center max-w-5xl w-11/12 mx-auto 2xl:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project, i) => (
              <motion.div
                whileHover={{ scale: [null, 1.3, 1.1] }}
                transition={{ duration: 0.5 }}
              >
                <PortfolioItem
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  key={i}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
