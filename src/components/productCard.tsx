"use client";

import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { useEffect } from "react";
import api from "@/apis/Api";
import { useRouter } from "next/navigation";

export const ProductCard = ({ product, title, onClick, index }) => {
  if (product == undefined) console.log(index);
  const router = useRouter();
  return (
    <Card
      theme={customProductCardTheme}
      className=" h-64 w-44"
      imgAlt={
        product !== undefined && product.productName !== null
          ? product.productName
          : " "
      }
      // imgSrc={product !== undefined ? product.saleProductImg : ""}
      imgSrc="/images/product.png"
    >
      <a>
        <h5 className=" te truncate text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {product !== undefined && product.productName !== null
            ? product.productName
            : " "}
        </h5>
      </a>
      <div className=" grid grid-cols-1">
        <span className="  text-xs text-white dark:text-white">
          Hãng: {product.companyName}
        </span>
        <span className=" text-xs  text-white dark:text-white">
          Số lượng: {product.amount}
        </span>
      </div>
      <div className="flex items-center justify-between flow-root">
        <button
          onClick={() => {
            console.log(product);
            router.push(
              `/productsmanagement/updateProduct/${product.productId}`
            );
          }}
          className=" float-left w-12 h-8 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Sửa
        </button>
        <button
          onClick={() => onClick(product.productId)}
          className=" float-right w-12 h-8 rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
