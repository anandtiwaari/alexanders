import React from "react";
import { Link } from "react-router-dom";

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const Alphabets = () => {
  // console.log("Choose by Alphabets");
  return (
    <div>
      <div className="wrapper_ mt-10 w-[60%] m-auto">
        <h4 className=" mt-7  mb-3 bg-[grey] w-max px-3 text-white py-2 rounded-md">
          Choose by Alphabets
        </h4>
        {alphabets.map((d, k) => {
          return (
            <Link to={`/poem/${d}`}>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {d.toUpperCase()}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
