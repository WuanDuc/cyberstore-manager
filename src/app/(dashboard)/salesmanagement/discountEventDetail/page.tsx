"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/saleProductCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";


const DiscountContainerLeft = () => (
    <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
      <h1 className="text-xl text-black font-bold mb-2">Thông tin chương trình</h1>
        <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Mã chương trình</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Tên chương trình</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Thời gian bắt đầu</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Thời gian kết thúc</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Điều kiện</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-base text-black font-semibold mb-1 mt-4">Chiết khấu</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
    </div>
  );
  
  const DiscountContainerRight = () => (
    <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 mt-12">
      
  
        {/* Container chứa thông tin bên phải */}
        <div className="flex flex-col mt-5  items-center justify-center">
            <h2 className="text-xl text-black font-bold mb-2 text-center">Hình ảnh</h2>
        <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />
      </div>
    </div>
  );
  

export default function DiscountEventDetail() {
    return (
        <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
            <div className="flex-col fixed top-0 w-screen">
                <div className="flex-col">
        <h1 className="text-3xl text-black font-bold mb-10 ml-10 mt-10">Thêm khuyến mãi</h1>
                    <div className="flex">
                    <DiscountContainerLeft />
                    <DiscountContainerRight />
                  </div>
                </div>
            </div>
        </main>
    )
}