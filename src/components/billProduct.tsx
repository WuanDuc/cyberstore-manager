"use client";

import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { MinusSquare, PlusSquare } from "react-feather";

export const BillCard = ({ product }) => {
  return (
    <div
      className="flex flex-row w-full mb-2 bg-gray-800 text-white"
      style={{
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        overflow: "hidden",
        // backgroundColor: "#F5F7FF",
      }}
    >
      <img
        src="\sample.jpg"
        alt="product"
        style={{ width: 120, height: 120 }}
      />

      <div className="flex flex-col w-full justify-between">
        <label className="font-semibold text-white text-s ml-1 text-wrap">
          Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm
        </label>
        <text className="ml-1 text-s text-white">{"Đơn giá: "}</text>
        <div className="flex flex-row w-full">
          <text className="ml-1 text-s text-white">{"Số lượng:  "}</text>
          <input
            type="number"
            min={1}
            className="w-12 text-center ml-3"
            style={{ borderColor: "#0156FF", borderWidth: 2, borderRadius: 5 }}
          />
        </div>
      </div>
    </div>
  );
};
const customProductCardTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
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
      on: "h-20 w-20 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
