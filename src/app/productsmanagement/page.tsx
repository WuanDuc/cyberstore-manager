"use client";
import Image from "next/image";
import { Button, Card, CustomFlowbiteTheme, Tabs } from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import ProductGridTab from "@/components/listProductCard";
import ProductGridTab5Col from "@/components/listProductCard";
import ProductGridTab4Col from "@/components/listProductCard4Col";

const sampleProduct = {
  name: "Sample Product",
  src: "https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

const FilterContainer = () => (
  <div className="h-2/3 w-100 bg-gray-300 p-4 ml-4 mr-4 text-center">
    <h1 className="text-black font-bold">Filters</h1>
    <button className="rounded-full bg-opacity-0 bg-gray-300 border border-gray-500  pt-2 pb-2 pl-4 pr-4 mt-4 ">
      Xóa filter
    </button>

    <h2 className="text-black font-bold mt-4 mb-2">Danh mục</h2>
    <ul className="list-none p-0 m-0">
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
    </ul>

    <h2 className="text-black font-bold mt-4 mb-2">Giá</h2>
    <div className="flex justify-between">
      <div className="flex-col">
        <div>$0 -$1,000</div>
        <div>$1,000 -$2,000</div>
        <div>$2,000 -$3,000</div>
        <div>$3,000 -$4,000</div>
        <div>$4,000 -$5,000</div>
        <div>$5,000 -$6,000</div>
        <div>$6,000 -$7,000</div>
        <div>$7,000 And Above</div>
      </div>
      <div className="flex-col">
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
      </div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Loại</h2>
    <div className="flex">
      <div className="bg-green-500 rounded p-2 mr-2"></div>
      <div className="mx-2">Mới</div>
    </div>
    <div className="flex">
      <div className="bg-yellow-500 rounded p-2 mr-2 mt-2"></div>
      <div className="mx-2">Cũ</div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Màu</h2>
    <div className="flex">
      <div className="bg-red-500 rounded p-2 mr-2"></div>
      <div className="bg-yellow-500 rounded p-2 mr-2"></div>
      <div className="bg-gray-500 rounded p-2 mr-2"></div>
    </div>

    <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-4 pr-4 mt-8">
      Áp dụng filters
    </button>
  </div>
);

const RightContainer = () => (
  <div className="flex-col item-center justify-center">
    <div className="h-1/4 w-100 bg-gray-300 p-4 ml-4 mr-4 ">
      <h1 className="text-xl text-black font-bold mb-6 text-center">Hãng</h1>

          <div className="mb-1">
            <h2 className="text-black">MSI</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Asus</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Lenovo</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Macbook</h2>
          </div>
          
          <div className="mb-1">
            <h2 className="text-black">HP</h2>
      </div>
      
      <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-6 pr-6 mt-4 mr-8 ml-8">Thêm hãng</button>
    </div>

    <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-6 pr-6 mt-8 mr-8 ml-8 mx-auto">Thêm loại sản phẩm</button>
  </div>

  
);

const ContainerLeft = () => (
  <div className=" w-2/4  p-4 ml-6 mr-6  overflow-y-auto">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin về sản phẩm</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Tên loại sản phẩm</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Hãng</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã loại sản phẩm</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Thời gian bảo hành</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Số lượng</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Loại sản phẩm</h2>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Máy tính</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Laptop</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">PC</h2>
    </div>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Linh kiện</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Màn hình</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Ổ cứng</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Chip</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Tản nhiệt</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Mainboard</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">RAM</h2>
    </div>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Phụ kiện</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Chuột</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Bàn phím</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Ghế gaming</h2>
    </div>
   
  </div>
);

const ContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    

      {/* Container chứa thông tin bên phải */}
      <div className="flex flex-col mt-5  items-center justify-center">
          <h2 className="text-xl text-black font-bold mb-2 text-center">Hình ảnh</h2>
      <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />
    </div>
  </div>
);


export default function ProductManagement() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row">
              <label className=" font-semibold text-2xl text-black p-7 pt-11 ">
                QUẢN LÝ SẢN PHẨM
              </label>
              <div className=" flex-row fixed right-36 pl-96 pt-1">
                <SearchInput></SearchInput>
              </div>
              <div className=" flex-row fixed right-4 pt-1">
                <Button>Thêm sản phẩm</Button>
              </div>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={customTabTheme}
            >
              <Tabs.Item active title="Quản lý kho">
              <div className="flex overflow-y-auto">
                    <FilterContainer />
                    <ProductGridTab5Col></ProductGridTab5Col>
                  </div>
                  <div className="flex justify-around">
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                  </div>
              </Tabs.Item>

              <Tabs.Item active title="CẬP NHẬT SẢN PHẨM">
              <div className="flex">
                    <ContainerLeft />
                    <ContainerRight />
                  </div>
              </Tabs.Item>

              <Tabs.Item title="Sản phẩm bán">
                <div className="flex flex-col h-screen overflow-y-auto">
                  <div className="flex">
                    <FilterContainer />
                    <ProductGridTab4Col></ProductGridTab4Col>
                    <RightContainer />
                  </div>
                  <div className="flex justify-around">
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                  </div>
                </div>
              </Tabs.Item>

              <Tabs.Item title="Quản lý phiếu nhập">
                <div className=" overflow-auto relative">
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                  <ProductCard product={sampleProduct} />
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
const customTabTheme: CustomFlowbiteTheme["tabs"] = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};
