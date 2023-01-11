import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-stone-900 dark:border-stone-900 dark:text-stone-900 rounded-md overflow-hidden hover:shadow-lg mb-2">
      <a href={link} target="_blank">
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer 2xl:h-full"
        />
        <div className="w-full p-4 bg-slate-200 dark:bg-slate-100">
          <h3 className="flex justify-center text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs text-sm">
            {stack.map((item, i) => (
              <span
                className="inline-block px-2 py-2 font-semibold border-2 border-stone-900 rounded-md dark:border-stone-900"
                key={i}
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;
