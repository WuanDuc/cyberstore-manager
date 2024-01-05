
'use client';

import { Card, CustomFlowbiteTheme } from 'flowbite-react';

export const ProductCard = ({ product }) => {
  return (
    <Card
      theme={customProductCardTheme}
      className=" h-60 w-32"
      imgAlt={product.name}
      imgSrc={product.src}
    >
      <a href="#">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
      </a>
      <div className=" flex-col">
        {product.sale != 0 ? (
          <span className=" text-sm line-through text-gray-600 dark:text-gray-400">
            {product.price}
          </span>
        ) : (
          <span></span>
        )}
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {Math.ceil((product.price * (100 - product.sale)) / 100)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
const customProductCardTheme : CustomFlowbiteTheme['card'] =
{
    "root": {
      "base": "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      "children": "flex h-full flex-col justify-center gap-4 p-6",
      "horizontal": {
        "off": "flex-col",
        "on": "flex-col md:max-w-xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    "img": {
      "base": "",
      "horizontal": {
        "off": "rounded-t-lg",
        "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  }