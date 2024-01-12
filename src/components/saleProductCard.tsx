"use client";

import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const SaleProductCard = ({ product, title, onClick, index }) => {
  const router = useRouter();
  if (product == undefined) console.log(index);
  return (
    <Card
      theme={customProductCardTheme}
      className=" h-64 w-44"
      imgAlt={
        product !== undefined && product.saleProductName !== null
          ? product.saleProductName
          : " "
      }
      // imgSrc={product !== undefined ? product.saleProductImg : ""}
      imgSrc="/images/product.png"
    >
      <a>
        <h5 className=" te truncate text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {product !== undefined && product.saleProductName !== null
            ? product.saleProductName
            : " "}
        </h5>
      </a>
      <div className=" flex-col">
        {product != undefined && product.price != 0 ? (
          <span className=" text-sm line-through text-gray-600 dark:text-gray-400">
            {product != undefined ? product.price : " "}
          </span>
        ) : (
          <span></span>
        )}
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product != null
              ? Math.ceil((product.price * (100 - product.discount)) / 100)
              : 0}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between flow-row">
        <button
          onClick={() => {
            router.push(
              `/productsmanagement/addSaleProduct/${product.saleProductId}`
            );
          }}
          className=" float-left w-12 h-8 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Sửa
        </button>
        <button
          onClick={() => {
            console.log(product);
            onClick(product);
          }}
          style={{ justifyContent: "center", alignItems: "center" }}
          className="float-right w-12 h-8 rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Xóa
        </button>
      </div>
    </Card>
  );
};
const customProductCardTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: " h-20 w-44",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
