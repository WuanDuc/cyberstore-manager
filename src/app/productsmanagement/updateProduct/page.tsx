"use client";
import Image from "next/image";
import { Button, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";

const ContainerLeft = () => (
  <div className=" w-2/4  p-4 ml-6 mr-6  overflow-y-auto">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin về sản phẩm</h1>
    <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
    <h2 className="text-base text-black font-semibold mb-1 mt-4">
      Tên loại sản phẩm
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-base text-black font-semibold mb-1 mt-4">Hãng</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-base text-black font-semibold mb-1 mt-4">
      Mã loại sản phẩm
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-base text-black font-semibold mb-1 mt-4">
      Thời gian bảo hành
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-base text-black font-semibold mb-1 mt-4">Số lượng</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
  </div>
);

const ContainerRight = () => (
  <div className="h-1/4 w-1/4 p-4 mr-6">
    {/* Container chứa thông tin bên phải */}
    <div className="flex flex-col mt-5  items-center justify-center">
      <div className="flex items-center">
        <h2 className="text-base text-black font-bold mt-3 mr-3 text-center">
          Thêm ảnh máy *
        </h2>
        <button className="rounded-full bg-opacity-0 bg-gray-300 border text-gray-500 font-bold text-base border-gray-500  pt-1 pb-1 pl-4 pr-4 mt-4 ">
          Chọn file...
        </button>
      </div>
      <img
        src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        alt="Product Image"
        className="w-40 h-40 rounded mr-4"
      />
    </div>
  </div>
);

const ContainerBottom = () => (
  <div className=" w-4/4  p-4 ml-6 mr-6  overflow-y-auto">
    {/* CHỌN LOẠI SẢN PHẨM */}
    <h2 className="text-base text-black font-semibold mb-1 mt-4">
      Loại sản phẩm
    </h2>
    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Máy tính:</h2>

      <input type="radio" className="form-radio text-blue-500 mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Laptop</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">PC</h2>
    </div>

    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Linh kiện:</h2>

      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Màn hình</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Ổ cứng</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Chip</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Tản nhiệt</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Mainboard</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">RAM</h2>
    </div>
    <div className="flex">
      <h2 className="text-base text-black mb-1 mt-4 mr-4">Phụ kiện:</h2>

      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Chuột</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Bàn phím</h2>
      <input type="radio" className="form-radio text-blue-500  mt-3 mr-2" />
      <h2 className="text-base text-black mb-1 mt-4 mr-2 pr-6">Ghế gaming</h2>
    </div>

    {/* HIỂN THỊ THÔNG TIN CHI TIẾT SẢN PHẨM */}
    <h2 className="text-base text-black font-semibold mb-1 mt-12">
      Thông tin chi tiết
    </h2>
        <div className="flex">
            {/* CỘT THỨ 1 */}
      <div className="flex-col">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Máy tính
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              CPU
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              RAM
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Chip đồ họa
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màn hình
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Lưu trữ
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Số cổng lưu trữ tối đa
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kiểu khe M2 hỗ trợ
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Màu
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
            </div>
            
            {/* CỘT THỨ 2 */}
      <div className="flex-col ml-20">
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng xuất hình
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Cổng kết nối
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kết nối không dây
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Bàn phím
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Hệ điều hành
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Kích thước
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Pin
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex">
          <div className="flex items-center">
            <h2 className="text-base text-black mb-1 mt-6 mr-4 whitespace-normal ">
              Khối lượng
            </h2>
          </div>
          <select className="ml-auto ml-2 border border-gray-300 rounded-md shadow-sm p-2 text-black mt-4 pl-20 pr-20">
            <option value="laptop">Laptop</option>
            <option value="pc">PC</option>
            {/* Add more options here */}
          </select>
        </div>
        
      </div>
    </div>
  </div>
);

export default function WarrantyDetail() {
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="flex-col fixed top-0 w-screen">
        <div className="flex-col h-screen overflow-y-auto">
          <h1 className="text-3xl text-black font-bold mb-10 ml-10 mt-10">
            Quản lý kho{" "}
            <span className="text-3xl text-black font-bold">
              {">"} Cập nhật sản phẩm
            </span>
          </h1>

          <div className="flex">
            <ContainerLeft />
            <ContainerRight />
          </div>

          <ContainerBottom />
        </div>
      </div>
    </main>
  );
}
