"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";


const RepairContainerLeft = () => (
    <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
      <h1 className="text-xl text-black font-bold mb-2">Thông tin phiếu bảo hành</h1>
        <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
        <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã phiếu</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-lg text-black font-semibold mb-1 mt-4">Tên khách hàng</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-lg text-black font-semibold mb-1 mt-4">Số điện thoại</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã hóa đơn</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <h2 className="text-lg text-black font-semibold mb-1 mt-4">Ngày lập phiếu - Ngày hết hạn</h2>
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
        <input type="text" className="w-full h-10 border border-gray-300 rounded px-3 mt-2" />
    </div>
  );
  
  const RepairContainerRight = () => (
    <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 mt-12">
      <h1 className="text-xl text-black font-bold mb-2">Thông tin máy bảo hành</h1>
        <div className="w-full h-100 bg-gray-600 mb-2"></div>
        <div className="flex">
        {/* Hình ảnh bên trái */}
        <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />
  
        {/* Container chứa thông tin bên phải */}
        <div className="flex flex-col mt-5  ">
          <div className="mb-1">
            <h2 className="text-black font-semibold">Tên máy:</h2>
            <span className="text-black">MSI MEG Trident X 102D</span>
          </div>
          <div>
            <span className="font-semibold text-black">Giá: $3,799</span>
          </div>
        </div>
      </div>
    </div>
);
  
export default function WarrantyDetail() {
    return (
        <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
            <div className="flex-col fixed top-0 w-screen">
                <div className="flex-col">
                <h1 className="text-3xl text-black font-bold mb-10 ml-10 mt-10">
  Quản lý Phiếu bảo hành{' '}
  <span className="text-3xl text-black font-bold">{'>'} Xem chi tiết</span>
</h1>

                <div className="flex">
                    <RepairContainerLeft />
                    <RepairContainerRight />
                  </div>
                </div>
            </div>
        </main>
    )
}