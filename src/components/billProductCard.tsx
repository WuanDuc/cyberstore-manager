"use client";

import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { useEffect } from "react";

export const BillProductCard = ({ product, title, onClick, index }) => {
  if (product == undefined) console.log(index);
  return (
    <Card
      theme={customProductCardTheme}
      className="h-80 w-52"
      imgAlt={
        product !== undefined && product.name !== null ? product.name : " "
      }
      imgSrc={"/images/product.png"}
    >
      <a href="#">
        <h5 className="text-s font-semibold tracking-tight text-gray-900 dark:text-white">
          {product !== undefined && product.name !== null ? product.name : " "}
        </h5>
      </a>
      <div className="flex flex-row">
        <div className=" flex-col">
          {product != undefined && product.price != 0 ? (
            <span className=" text-xs line-through text-gray-600 dark:text-gray-400">
              {product != undefined ? product.price : " "}
            </span>
          ) : (
            <span></span>
          )}
          <div>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {product != null
                ? Math.ceil((product.price * (100 - product.discount)) / 100)
                : 0}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between ml-3">
          <button
            onClick={() => {
              console.log(product);
              onClick(product);
            }}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {title}
          </button>
        </div>
      </div>
    </Card>
  );
};
const customProductCardTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 pl-2",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-52 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
