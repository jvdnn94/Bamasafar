import React from "react";
import { Link } from "react-router-dom";

function CardItem({ src, text, label, path }) {
  return (
    <li className="flex mx-1">
      <Link
        to={path}
        className="block w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
      >
        {/* تصویر */}
        <figure className="relative w-full h-56 md:h-64 overflow-hidden">
          <img
            src={src}
            alt={label || "Card Image"}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          {/* لیبل روی تصویر */}
          {label && (
            <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {label}
            </span>
          )}
        </figure>

        {/* متن زیر عکس */}
        <div className="p-4">
          <h5 className="text-gray-800 text-base md:text-lg font-medium leading-snug">
            {text}
          </h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
